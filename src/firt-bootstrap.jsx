import React from 'react'
// import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
const FirtBootstrap = () => {
    return (
        <div>
            <div>
                <Button>hello</Button>
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