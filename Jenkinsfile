
Those **must be removed completely**.

Your Jenkinsfile should be exactly this:

:::writing{variant="document" id="63721"}
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t cicd-webapp .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop cicd-webapp2 || true
                docker rm cicd-webapp2 || true

                docker run -d \
                -p 8081:80 \
                --name cicd-webapp2 \
                cicd-webapp
                '''
            }
        }
    }
}
:::

### Fix it

Open:

```cmd
notepad Jenkinsfile