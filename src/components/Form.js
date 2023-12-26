export function Form() {
  return (
    <>
      <div className="form">
        <form>
          <label>Your name</label>
          <input type="text"></input>
          <label>Email</label>
          <input type="email"></input>
          <label>Subject</label>
          <input type="text"></input>
          <label>Message</label>
          <textarea rows={6} placeholder="type your message here" />
          <button className="btn btn-dark">Submit</button>
        </form>
      </div>
    </>
  );
}
