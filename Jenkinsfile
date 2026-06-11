pipeline {
agent any


stages {

    stage('Checkout') {
        steps {
            git branch: 'main',
                url: 'https://github.com/mosin011/CICD.git'
        }
    }

    stage('Verify Environment') {
        steps {
            sh 'git --version'
            sh 'docker --version'
            sh 'pwd'
            sh 'ls -la'
        }
    }

    stage('Build Docker Image') {
        steps {
            sh 'docker build -t cicd-webapp .'
        }
    }

    stage('Deploy Container') {
        steps {
            sh 
            docker stop cicd-webapp2 || true
            docker rm cicd-webapp2 || true

            docker run -d \
            --name cicd-webapp2 \
            -p 8081:80 \
            cicd-webapp
            
        }
    }
}

post {
    success {
        echo 'Deployment completed successfully!'
    }

    failure {
        echo 'Pipeline failed. Check Console Output.'
    }
}

}
