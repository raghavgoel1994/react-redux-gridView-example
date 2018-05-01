import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { undeleteselected, deleteselected, deleteAllSeleted, fetchImage } from './../action/search';
import { Button } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
class ImageListComponent extends Component {
    constructor(props) {
        super(props);
        this.deleteTemp = [];
    }
    componentDidMount() {
        this.props.fetchImage(0);
    }
    deleteSeleted(value) {
        this.props.deleteSeleted.bind(this, value)
        this.deleteTemp = [];
    }
    deleteImageItems(imageid) {
        if (!this.props.imagereducers.deletedtemp.includes(imageid)) {
            return (
                <button className="btn btn-primary btnwidth" onClick={this.props.deleteselected.bind(this, imageid)}>Delete</button>
            )
        }
        else {
            return (
                <button className="btn btn-danger btnwidth" onClick={this.props.undeleteselected.bind(this, imageid, this.props.imagereducers.deletedtemp)}>Undelete</button>
            )
        }
    }
    createImageItems() {
        let filterFavImage = this.props.imagereducers.image.filter(
            (user) => {
                return !this.props.imagereducers.deletedselected.includes(user.imageid);
            }
        );
        return filterFavImage.map((user, index) => {
            return (
                <div key={index} className="col-sm-4" style={{ marginBottom: '10px' }}>
                    <div className="card" style={{ height: '100%' }}>
                        <div className="card-header">
                            <div className="col-sm-9">
                                <h5 className="card-title" style={{ margin: '0' }}>{user.imagename}</h5>
                                <small style={{ margin: '0' }}>{user.createdon}</small>
                            </div>
                            <div className="col-sm-3">

                            </div>
                        </div>
                        <div className="card-body text-center">
                            <img src={user.imagescr} style={{ height: '300px', width: '250px' }} />
                        </div>
                        <div>
                            {
                                this.deleteImageItems(user.imageid)
                            }
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        if (this.props.imagereducers.fetching) {
            return (
                <div className="container">
                    <div className="lds-circle" style={{ marginTop: '10%' }}></div>
                    <h2 style={{ textAlign: 'center' }}>FETCHING .... ! </h2>
                </div>
            )
        }
        else if (this.props.imagereducers.error) {
            return (
                <div className="container" style={{ marginTop: '20px' }}>
                    <h2>NO DATA FOUND .... ! </h2>
                </div>
            )
        }
        else {
            return (
                <div className="container imagelistmargn">
                    <div className=" imagelistmarign btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="row btn-group mr-2" role="group" aria-label="First group">
                            <button className="col-sm-2 btn btn-danger" onClick={this.props.fetchImage.bind(this, 1)}>Sort By Name &darr;</button>
                            <button className="col-sm-2 btn btn-danger" onClick={this.props.fetchImage.bind(this, 2)}>Sort By Name &uarr;</button>
                            <button className="col-sm-2 btn btn-danger" onClick={this.props.fetchImage.bind(this, 3)}>Sort By Date &darr;</button>
                            <button className="col-sm-2 btn btn-danger" onClick={this.props.fetchImage.bind(this, 4)}>Sort By Date &uarr;</button>
                            <button className="col-sm-2 btn btn-danger" onClick={this.props.deleteAllSeleted.bind(this, this.props.imagereducers.deletedtemp)} data-toggle="tooltip" data-placement="top" title="Select items for multidelete">Delete Seleted</button>
                        </div>
                    </div>
                    <div className="row imagelistmargn">
                        {
                            this.createImageItems()
                        }
                    </div>
                </div>
            )
        }
    }
}
function mapStateToProps(state) {
    return {
        imagereducers: state.imagereducers
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, { fetchImage: fetchImage }, { deleteAllSeleted: deleteAllSeleted }, { deleteselected: deleteselected }, { undeleteselected: undeleteselected }), dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ImageListComponent);