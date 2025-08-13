import { Component } from 'react'
import { Link } from '@tanstack/react-router';

class ErrorBoundary extends Component {
    state = { hasError: false }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }
    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo)
    }

    
    render () {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <h1>Something went wrong.</h1>
                    <p>{this.state.errorMessage}</p>
                    <p>
                        {this.state.error}
                    </p>
                    <Link to="/"> Go back home</Link>
                </div>
            )
        }
        return this.props.children
    }
}

ErrorBoundary.getDerivedStateFromError()

export default ErrorBoundary