import React, { Fragment, useEffect } from "react";
import "./orderDetails.css";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { getOrderDetails, clearErrors } from "../../actions/orderAction";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const OrderDetails = ({ match }) => {
  const { order, error, loading } = useSelector((state) => state.orderDetails);

  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getOrderDetails(match.params.id));
  }, [dispatch, alert, error, match.params.id]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Order Details" />
          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              <Typography component="h1"></Typography>
              {/* ------------Start-------------- */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="card" style={{ maxWidth: "80rem" }}>
                  <h5 className="card-header p-3">Order #{order && order._id}</h5>
                  <div className="card-body">
                    <h5 className="card-title">Delivery Address</h5>
                    <h6>{order.user && order.user.name}</h6>{" "}
                    <h6 style={{ fontWeight: "400" }}>
                      {order.shippingInfo && (
                        <div>
                          {order.shippingInfo.city && (
                            <span>
                              {order.shippingInfo.city}
                              <br />
                            </span>
                          )}
                          {order.shippingInfo.state && (
                            <span>
                              {order.shippingInfo.state}
                              <br />
                            </span>
                          )}
                          {order.shippingInfo.pinCode && (
                            <span>
                              {order.shippingInfo.pinCode}
                              <br />
                            </span>
                          )}
                          {order.shippingInfo.country && (
                            <span>{order.shippingInfo.country}</span>
                          )}
                        </div>
                      )}
                    </h6>
                    <h6>
                      Phone Number{" "}
                      <h6 style={{ fontWeight: "400" }}>
                        {order.shippingInfo && order.shippingInfo.phoneNo}
                      </h6>{" "}
                    </h6>
                    <div className="row">
                      <div className="col mb-6">
                        <h4 className="small text-muted mb-1">
                          Date & Time - {order.createdAt}
                        </h4>
                      </div>
                      <div className="col mb-6">
                        <h4 className="small text-muted mb-1">
                          Order No. - #{order._id}
                        </h4>
                      </div>
                    </div>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Index</th>
                          <th scope="col">Img</th>
                          <th scope="col">Name</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Price</th>
                          <th scope="col">Total Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.orderItems &&
                          order.orderItems.map((item) => (
                            <>
                              <tr>
                                <td></td>
                                <td>
                                  <img
                                    style={{ height: "100px" }}
                                    src={item.image}
                                    alt="Product"
                                  />
                                </td>
                                <td>
                                  <Link to={`/product/${item.product}`}>
                                    {item.name}
                                  </Link>{" "}
                                </td>
                                <td>{item.quantity}</td>
                                <td>₹{item.price}</td>
                                <td>₹{item.price * item.quantity}/-</td>
                              </tr>
                            </>
                          ))}
                      </tbody>
                      <tfoot>
                      <tr>
                          <th colSpan={3}></th>
                          <th colSpan={2} >GST 0.18%</th>
                          <th scope="col">
                          {order.taxPrice && order.taxPrice}/-
                          </th>
                        </tr>
                        <tr>
                          <th colSpan={3}></th>
                          <th colSpan={2} >Delivery Charge</th>
                          <th scope="col">
                          {order.shippingPrice && order.shippingPrice}/-
                          </th>
                        </tr>
                        <tr>
                          <th colSpan={3}></th>
                          <th colSpan={2} >Total Amount</th>
                          <th scope="col">
                            {order.totalPrice && order.totalPrice}/-
                            <p
                              className={
                                order.paymentInfo &&
                                order.paymentInfo.status === "succeeded"
                                  ? "greenColor"
                                  : "redColor"
                              }
                            >
                              {order.paymentInfo &&
                              order.paymentInfo.status === "succeeded"
                                ? "PAID"
                                : "NOT PAID"}
                            </p>
                          </th>
                        </tr>
                      </tfoot>
                    </table>
                    <div className="row">
                      <div className="col-md-12">
                        <h5>
                          Order {"  "}
                          <a
                            href="#"
                            style={{ textDecoration: "none" }}
                            className={
                              order.orderStatus &&
                              order.orderStatus === "Delivered"
                                ? "greenColor text-white"
                                : "redColor"
                            }
                          >
                            {order.orderStatus && order.orderStatus}
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ------------End------------ */}
          </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default OrderDetails;
