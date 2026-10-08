function Payment() {
  return (
    <section className="mt-5 rounded-3xl bg-white p-6">
      <h3 className="text-xl font-bold">Payment Method</h3>

      <select className="mt-3 rounded-xl border p-3">
        <option>UPI</option>
        <option>Card</option>
        <option>Cash</option>
      </select>
    </section>
  );
}

export default Payment;
