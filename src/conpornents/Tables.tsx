import { Table, Button } from "reactstrap";
const Tables= () => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>氏名</th>
                    <th>Email</th>
                    <th>電話番号</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>aaa</td>
                    <td>bbb</td>
                    <td>000-0000-0000</td>
                    <td>
                        <Button>test</Button>
                        <Button>test</Button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>aaa</td>
                    <td>bbb</td>
                    <td>000-0000-0000</td>
                    <td>
                        <Button>test</Button>
                        <Button>test</Button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>aaa</td>
                    <td>bbb</td>
                    <td>000-0000-0000</td>
                    <td>
                        <Button>test</Button>
                        <Button>test</Button>
                    </td>
                </tr> 
            </tbody>
        </Table>
    )
};

export default Tables;