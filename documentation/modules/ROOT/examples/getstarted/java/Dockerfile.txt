FROM fabric8/java-jboss-openjdk8-jdk:1.3.1
ENV JAVA_APP_DIR=/deployments
ENV AB_OFF=true
EXPOSE 8080
COPY target/greeter.jar /deployments/