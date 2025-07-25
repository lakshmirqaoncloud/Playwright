pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = "e2e-automation"
        CI = "true"
    }
    
    options {
        timeout(time: 20, unit: 'MINUTES')
        timestamps()
    }
    
    stages {
        stage('Build & Test') {
            steps {
                echo 'Building Docker image and running tests...'
                script {
                    // Build the image
                    sh "docker build -t ${DOCKER_IMAGE}:${BUILD_NUMBER} ."
                    
                    // Run tests with Chrome and Safari only, .env file is already in the image
                    sh '''
                        docker run --rm \
                          -v ${WORKSPACE}/test-results:/app/test-results \
                          -v ${WORKSPACE}/playwright-report:/app/playwright-report \
                          -e CI=${CI} \
                          ${DOCKER_IMAGE}:${BUILD_NUMBER} npx playwright test --project=chromium --project=webkit
                    '''
                }
            }
        }
    }
    
    post {
        always {
            // Publish test report
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Test Report'
            ])
            
            // Archive results
            archiveArtifacts artifacts: 'test-results/**/*', allowEmptyArchive: true
            
            // Clean up
            sh "docker rmi ${DOCKER_IMAGE}:${BUILD_NUMBER} || true"
        }
        
        success {
            echo '✅ All tests passed!'
        }
        
        failure {
            echo '❌ Tests failed - check the report!'
        }
    }
} 