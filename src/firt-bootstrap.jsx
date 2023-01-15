import React from 'react'
import { Button, Stack, Badge, Alert } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
const FirtBootstrap = () => {
    return (
        <div>
            <div>
                <Stack direction="horizontal" gap={2}>
                    <Button as="a" variant="primary">
                        Button as link
                    </Button>
                    <Button as="a" variant="success">
                        Button as link
                    </Button>
                </Stack>
                <div>
                    <h1>
                        Example heading{' '}
                        <Badge bg="secondary" as="Button">
                            New
                        </Badge>
                    </h1>
                </div>
                <div>
                    <Alert dismissible variant="danger">
                        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                        <p>
                            Change this and that and try again.
                        </p>
                    </Alert>
                </div>
            </div>
            <div class="jumbotron text-center">
                <h1>My First Bootstrap Page</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-sm-4 text-center">
                        <h3>Column 1</h3>
                        <p>Lorem ipsum dolor..</p>
                    </div>
                    <div class="col-sm-4 text-center">
                        <h3>Column 2</h3>
                        <p>Lorem ipsum dolor..</p>
                    </div>
                    <div class="col-sm-4 text-center">
                        <h3>Column 3</h3>
                        <p>Lorem ipsum dolor..</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirtBootstrap;
