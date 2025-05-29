pipeline {
    agent any

    environment {
        IMAGE_NAME = 'devops-frontend'
        CONTAINER_NAME = 'frontend_container'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/AlvaroXC/devops-project-frontend.git', branch: 'development'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $IMAGE_NAME .'
                }
            }
        }

        stage('Stop Previous Container') {
            steps {
                script {
                    sh 'docker stop $CONTAINER_NAME || true'
                    sh 'docker rm $CONTAINER_NAME || true'
                }
            }
        }

        stage('Run New Container') {
            steps {
                script {
                    sh 'docker run -d -p 80:80 --name $CONTAINER_NAME $IMAGE_NAME'
                }
            }
        }
    }
}
