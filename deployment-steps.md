# Deployment Steps for Insurance Application on AKS

## Prerequisites
1. Azure CLI installed
2. kubectl installed
3. Docker installed
4. Access to Azure subscription
5. Istio installed

## Step 1: Create AKS Cluster
```bash
# Login to Azure
az login

# Create resource group
az group create --name insurance-rg --location eastus

# Create AKS cluster
az aks create \
  --resource-group insurance-rg \
  --name insurance-cluster \
  --node-count 3 \
  --enable-addons monitoring \
  --generate-ssh-keys
```

## Step 2: Install cert-manager
```bash
# Add the Jetstack Helm repository
helm repo add jetstack https://charts.jetstack.io
helm repo update

# Install cert-manager
helm install cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --create-namespace \
  --version v1.13.0 \
  --set installCRDs=true

# Apply ClusterIssuer
kubectl apply -f k8s/cert-manager/cluster-issuer.yaml
```

## Step 3: Install NGINX Ingress Controller
```bash
# Add the ingress-nginx repository
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update

# Install the ingress-nginx controller with WAF enabled
helm install nginx-ingress ingress-nginx/ingress-nginx \
  --namespace insurance-system \
  --set controller.replicaCount=2 \
  --set controller.nodeSelector."kubernetes\.io/os"=linux \
  --set defaultBackend.nodeSelector."kubernetes\.io/os"=linux \
  --set controller.admissionWebhooks.patch.nodeSelector."kubernetes\.io/os"=linux \
  --set controller.config.enable-modsecurity="true" \
  --set controller.config.enable-owasp-modsecurity-crs="true" \
  --set controller.config.modsecurity-snippet="SecRuleEngine On"

# Get the ingress controller public IP
kubectl get service nginx-ingress-ingress-nginx-controller -n insurance-system

# Apply ingress rules
kubectl apply -f k8s/ingress/nginx-ingress.yaml
```

## Step 4: Install Istio
```bash
# Download Istio
curl -L https://istio.io/downloadIstio | sh -

# Add istioctl to PATH
export PATH=$PWD/istio-1.20.0/bin:$PATH

# Install Istio
istioctl install --set profile=demo -y

# Enable Istio injection for insurance-system namespace
kubectl label namespace insurance-system istio-injection=enabled
```

[Previous monitoring and deployment steps remain the same...]

## Security Features Added

### SSL/TLS
- Automatic SSL certificate provisioning via cert-manager
- Force SSL redirect
- HSTS enabled

### Rate Limiting
- Request per second (RPS) limit: 10
- Request per minute (RPM) limit: 100
- Connection limit: 5 per client
- Global rate limit: 1000 requests per hour

### CORS
- Configured for secure cross-origin requests
- Specific allowed methods and headers
- Credentials support
- 24-hour max age

### WAF (Web Application Firewall)
- ModSecurity enabled
- OWASP Core Rule Set
- Custom security rules
- Request body scanning

### Additional Security Headers
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy

### Request Limits
- Maximum body size: 10MB
- Path-based rate limiting
- Connection limiting

## Monitoring Security
- ModSecurity audit logging enabled
- Rate limit monitoring via Prometheus metrics
- Security event logging to ELK stack

## Important Notes
- Update the email address in cluster-issuer.yaml
- Replace insurance.example.com with your actual domain
- Monitor rate limits and adjust based on traffic patterns
- Regularly update OWASP rules
- Review ModSecurity logs for false positives