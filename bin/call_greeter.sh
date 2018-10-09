#!/bin/bash
set -e
 
export IP_ADDRESS=$(minishift ip)
export SERVICE_NODEPORT=$(oc get svc knative-ingressgateway -n istio-system -o 'jsonpath={.spec.ports[?(@.port==80)].nodePort}')

export HOST_URL=$(kubectl get routes.serving.knative.dev greeter  -o jsonpath='{.status.domain}')

curl -H "Host: ${HOST_URL}" ${IP_ADDRESS}:${SERVICE_NODEPORT}