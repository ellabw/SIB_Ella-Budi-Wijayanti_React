import { Outlet } from "react-router-dom";
import { getItems } from "../items";
import ItemRow from "../components/ItemRow";

const Items = () => {
    const items = getItems();

    return (
        <>
            <h1>Items page</h1>
            <p>Select an item to be shown</p>
            <table>
                <tr>
                    <th>Item</th>
                    <th>Action</th>
                </tr>
                {
                    items.map(item => {
                        return (
                            <ItemRow key={item.id} item={item} />
                        )
                    })
                }
            </table>

            <Outlet />
        </>
    )
}

export default Items;