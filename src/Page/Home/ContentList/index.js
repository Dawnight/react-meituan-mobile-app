import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import { getContentList } from "../../../store/content/actions";

class ContentList extends Component {

  componentDidMount() {
    this.props.getContentList();
  }

  renderItems = () => {
    let contentList = this.props.contentList;
    console.log(contentList);
    return contentList.map(item => (
      <div key={item.id}>{item.name}</div>
    ));
  };

  render() {
    return (
      <div className="content-list">
        <h4 className="list-title">
          <span className="title-line"></span>
          <span>附近商家</span>
          <span className="title-line"></span>
        </h4>
        {this.renderItems()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contentList: state.content.contentList
});

const mapDispatchToProps = dispatch => ({
  getContentList() {
    dispatch(getContentList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);
