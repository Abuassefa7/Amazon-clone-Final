import React, { useState, useEffect } from 'react'
import './Orders.css'
import {db} from '../FirebaseFile/Firebase'
import { usestateValue } from '../StateProvider/StateProvider'
import Order from './Order';

function Orders() {
  const [{basket,user}, dispatch]=usestateValue();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
		if (user) {
			db.collection("users")
				.doc(user?.uid)
				.collection("orders")
				.orderBy("created", "desc")
				.onSnapshot((snapshot) =>
					setOrders(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					)
				);
		} else {
			setOrders([]);
		}
	}, [user]);

	// console.log(orders)
  return (
    <div className='orders'>

      <h1> Your orders </h1>
			<div className="orders__order">
				{orders?.map((order,i) => (
					<Order order={order} key={i} />
				))}
			</div>

    </div>
  )
}

export default Orders