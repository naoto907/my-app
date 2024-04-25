import React, {Component} from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

import Tables from "@/component/Tables";
import AddModal from "@/component/modal";

class Home extends Component {
    state = {
        items: [],//初期値は空だけどfeachItemsによってデータが与えられる
        error: null,
    };

    componentDidMount() {/*リロード時に初期に戻す*/
        this.feachItems();
    }
    //apiを介してデータベースにアクセスしている
    feachItems = () => {
        fetch('http://localhost:3000/get')
        .then((response) => response.json())/*response.json()を呼び出してJSON形式のレスポンスを解析 */
        .then((items) => this.setState({items}))/*thenメソッドを使用して、解析されたデータをitemsという変数にセットしthis.setState()を使ってコンポーネントの状態を更新 */
        .catch((error) => this.setState({error: 'データの取得に失敗'}));/*データの取得中にエラーが発生した場合は、catchメソッドでエラーをキャッチし、error状態を更新*/
    };

    render() {
        const {items, error } = this.state;
        // console.log(items);
        // console.log(error);
        return(
            <div>
                <Head>
                    <title>My Next.js Site</title>
                    <meta name="description" content="Welcome to My Next.js Site!"/>
                </Head>
            
                <main>
                    <h1>UserManagement</h1>
                    {error && <p className='text-danger'>{error}</p>} {/**errorが存在し、かつその値が空でない場合にのみ、赤いテキストでエラーメッセージを表示 */}
                    <Tables items = {items}/>
                    <AddModal />
                </main>
            </div>
        );
    }
}

export default Home;