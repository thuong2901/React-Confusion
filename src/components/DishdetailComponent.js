import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            selectedDishDetail: this.props.selectedDish
        }
    }

    renderDish(dish) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg object src={ dish.image } alt={ dish.name } />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {
        if(comments != null) {
            const cmts = comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p>{ comment.comment }</p>
                        <p>-- { comment.author }, 
                            &nbsp;
                            {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                            }).format(new Date(Date.parse(comment.date)))}
                        </p>
                    </li>
                );
            });
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {cmts}
                    </ul>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }

    }

    render() {

        const dish = this.props.dish;

        if(dish != null) {
            const dishItem = this.renderDish(dish);
            const dishComment = this.renderComments(dish.comments);
            return (
                <div class="container">
                    <div className="row">
                        {dishItem}
                        {dishComment}
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default Dishdetail;