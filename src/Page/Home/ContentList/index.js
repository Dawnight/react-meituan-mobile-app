import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss';

import ContentListItem from '../ContentListItem';
import ScrollView from 'components/ScrollView';
import Loading from 'components/Loading';

import { getContentList } from "store/content/actions";


class ContentList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isEnd: false,
      loadingText: '加载中'
    };
    this.page = 0;
    this.props.getContentList();
  }

  renderItems = () => {
    let contentList = this.props.contentList;
    if (contentList.length) {
      return contentList.map(item => (
        <ContentListItem key={item.id} itemData={item}/>
      ));
    }
    return null;
  };

  onLoadPage = () => {
    if (this.page > 2) {
      this.setState({
        isEnd: true,
        loadingText: '加载完成'
      });
    } else {
      this.page++;
      this.props.getContentList(this.page);
    }
  };

  render() {
    return (
      <div className="content-list">
        <h4 className="list-title">
          <span className="title-line"/>
          <span>附近商家</span>
          <span className="title-line"/>
        </h4>
        <ScrollView loadCallback={this.onLoadPage}
          isEnd={this.state.isEnd}>
          {this.renderItems()}
        </ScrollView>
        <Loading isEnd={this.state.isEnd} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contentList: state.content.contentList
});

const mapDispatchToProps = dispatch => ({
  getContentList(page) {
    dispatch(getContentList(page));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);
