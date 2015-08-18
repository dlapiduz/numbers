1. Push test app
1. Read marketplace (nothing is there)
1. Create service app
1. Add catalog
1. Setup basic auth
1. Push service app
1. Set username/password env vars
1. cf create-service-broker numbers-broker user pass http://numbers.10.244.0.34.xip.io
1. cf enable-service-access numbers
1. cf marketplace (we have a service)
1. cf create-service numbers default numbers-instance (fails)
1. Add service_instance and binding endpoints to service
1. Push service
1. cf update-service-broker numbers-broker user pass http://numbers.10.244.0.34.xip.io
1. cf bind-service numbers-app numbers-instance
1. cf restage numbers-app (oops app doesn't start)
1. Update app to use service
1. Push app
1. Test everything works
1. Add plan to service for testing creds
1. Push service
1. cf update-service-broker numbers-broker user pass http://numbers.10.244.0.34.xip.io
1. cf enable-service-access numbers
1. cf create-service numbers test numbers-test
1. cf unbind-service numbers-app numbers-instance
1. cf bind-service numbers-app numbers-test
