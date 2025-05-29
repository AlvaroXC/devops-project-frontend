pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'development', url: 'https://github.com/AlvaroXC/devops-project-frontend.git'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Copiamos los archivos estáticos al directorio de Nginx
                sh 'sudo rm -rf /var/www/html/*'
                sh 'sudo cp -r dist/* /var/www/html/'
            }
        }
    }
}
