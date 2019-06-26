import * as React from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'antd';

import BaseComponent from '@/pages/components/BaseComponent';
import PageLoading from '@/components/PageLoading';

@(connect(state => {
    return {};
}, {}) as any)
export default class Home extends BaseComponent {
    state = {
        inited: false
    }

    render() {
        return this.state.inited ? (
            <div className="page c-page-hom">
                <PageHeader title="管理中心" />
                <div className="page-content">
                    Home
                </div>
            </div>
        ) : <PageLoading />;
    }
}
