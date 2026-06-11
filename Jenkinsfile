pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/mosin011/CICD.git'
            }
        }

        stage('Build Docker') {
            steps {
                sh 'docker build -t cicd-webapp .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop cicd-webapp2 || true
                docker rm cicd-webapp2 || true
                docker run -d --name cicd-webapp2 -p 8081:80 cicd-webapp
                '''
            }
        }
    }
}