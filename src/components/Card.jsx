function Card(props) {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img style={{width: "30rem" , height: "15rem"}}
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.desc}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-success text-white">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img style={{width: "30rem" , height: "15rem"}}
            src="https://images.unsplash.com/photo-1719937050679-c3a2c9c67b0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <p>{props.para}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-success text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
