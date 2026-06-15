# Full-Stack Infrastructure Automation (IaC & Configuration Management)

This repository contains an end-to-end DevOps production-ready pipeline. It automates AWS infrastructure provisioning using **Terraform**, cluster-wide configuration using **Ansible**, and deploys a multi-tier containerized stack (React, Node.js, MongoDB, Prometheus, Grafana) using **Docker Compose**.

## 📁 Repository Structure
```text
├── ansible/
│   ├── Dev_Ops.pem
│   └── deploy.yml
├── Terraform/
│   └── main.tf
├── frontend/
│   ├── app.js
│   └── Dockerfile
├── backend/
│   ├── server.js
│   └── Dockerfile
├── monitoring/
│   └── prometheus.yml
├── k8s/
└── docker-compose.yml
```

## 🔒 Open Network Ports (AWS Security Group)
The environment configuration automatically exposes the following ports for public layout access:
- `22` ➔ SSH Remote Management
- `3000` ➔ Frontend React Application
- `5000` ➔ Backend Node.js Express API
- `9090` ➔ Prometheus Native Dashboard
- `3001` ➔ Grafana Observability Panel

## 🛠️ Infrastructure Lifecycle Steps

### 1. Cloud Provisioning (Terraform)
Deploy the baseline compute hardware (t3.micro/small instance) into AWS:
```bash
cd Terraform
terraform init
terraform plan
terraform apply -auto-approve
```

### 2. Configuration & Deployment (Ansible)
Orchestrate runtime dependencies, install Docker engines, and trigger the containers:
```bash
cd ../ansible
chmod 400 Dev_Ops.pem
ansible-playbook -i inventory.ini deploy.yml
```

## 📊 Live Endpoints
Once running, you can access your web services directly via browser:
- **React Frontend Application:** `http://<YOUR_AWS_PUBLIC_IP>:3000`
- **Prometheus Performance Scraper:** `http://<YOUR_AWS_PUBLIC_IP>:9090`
- **Grafana Metrics Monitoring:** `http://<YOUR_AWS_PUBLIC_IP>:3001` *(Credentials: admin / admin)*
