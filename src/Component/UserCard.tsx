import React from "react";

const UserCard = ({feedData}) => {
    const {firstName,image,lastName,about,gender,age} = feedData
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
          <img
            src={image}
            alt="photo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <p>{age + " ," +gender} </p>}
          <p>
            {about}
          </p>
          <div className="card-actions justify-center mx-5">
            <button className="btn btn-secondary">Ignore</button>
            <button className="btn btn-primary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
