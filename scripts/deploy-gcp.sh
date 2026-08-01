#!/usr/bin/env bash
# ============================================================================
# Deploy Belter Oracle Tech (site master estático) → Google Cloud Run
# Uso:
#   ./scripts/deploy-gcp.sh            # build + push + deploy
#   ./scripts/deploy-gcp.sh --only-build  # só build + push da imagem
# ============================================================================
set -euo pipefail

export PATH="$HOME/google-cloud-sdk/bin:$PATH"
export CLOUDSDK_PYTHON="$HOME/.python313/bin/python3"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

PROJECT="belter-oracle-aplications"
REGION="us-east1"
SERVICE="belter-oracle-tech"
IMAGE="southamerica-east1-docker.pkg.dev/${PROJECT}/cloud-run-source-deploy/belter-oracle-tech:latest"

echo "==> 1/3 Build da imagem (linux/amd64)..."
docker build --platform linux/amd64 -t "$IMAGE" .

echo "==> 2/3 Push para Artifact Registry..."
docker push "$IMAGE"

if [ "${1:-}" = "--only-build" ]; then
  echo "==> Imagem publicada (sem deploy). ✔"
  exit 0
fi

echo "==> 3/3 Deploy no Cloud Run..."
gcloud run deploy "$SERVICE" \
  --region="$REGION" \
  --image="$IMAGE" \
  --allow-unauthenticated \
  --port=8080 \
  --memory=256Mi \
  --cpu=1 \
  --min-instances=0 \
  --max-instances=5 \
  --timeout=60 \
  --concurrency=80 \
  --quiet

echo "==> Deploy concluído. ✔"
