import { ChangeEvent } from "react";
import { Table, Button } from "reactstrap";
import EditModal from "@/component/EditModal";


interface Item {//Itemsの構造を定義
    id: number;
    fullname: string;
    email: string;
    phone: string;
    date: string;
}

interface TablesProps {//itemsはItemの構造だと定義
    items: Item[];
}

const Tables= ({items}: TablesProps ) => {//受け取ったitemsをItemの定義だと指定
    // console.log(items);
    const data = items;
    console.log(data);
    const handleDelete = (id: number) => {
        console.log(id);
        fetch('http://localhost:3000/delete', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id })
        })
        .then((response) => response.json())
        .then((data) => console.log('Success:', data))
        .catch((error) => console.error('Error:', error));
    };
    
    
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
                {items. map ((item) => (
                    <tr key= {item.id}>{/**プライマリーキーみたいなもの */}
                        <th scope ="row">{item.id}</th>
                        <td>{item.fullname}</td>
                        <td>{item.email || 'N/A'}</td>{/**||は又はという意味 */}
                        <td>{item.phone || 'N/A'}</td>
                        <td>{item.date || 'N/A'}</td>
                        <td>
                            <div className="d-flex">
                            <EditModal/>{' '}
                            <Button coler ="danger" onClick={() => {handleDelete(item.id)}}>削除</Button>
                            </div>    
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default Tables;