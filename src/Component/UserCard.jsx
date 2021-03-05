import React from 'react';

function UserCard(props) {
    const { pic,firstName, lastName, email } = props;
    return (
        <div
          className="card mt-2 mb-5 mx-auto"
          style={{ width: "18rem", border: "1px solid red" }}
        >
          <img
            src={pic}
            className="card-img-top mx-auto mt-2"
            style={{ width: "100%" ,height:"18rem"}}
            alt="pic"
          />
          <div className="card-body text-center">
            <p>
              {firstName}
              {` `}
              {lastName}
            </p>
            <p>{email}</p>
          </div>
      </div>
    );
}

export default UserCard
