pipeline {
agent any

```
stages {

    stage('Build Docker Image') {
        steps {
            sh 'docker build -t cicd-webapp .'
        }
    }

    stage('Deploy') {
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
```

}
