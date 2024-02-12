import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../../../../features/profileSlice.jsx";

export const Edit_profile = () => {
  const profile = useSelector((state) => state.profile);
  //Gestion btn edit and Editform
  const [btnEdit, setEditBtn] = useState(true);
  // redux
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  //profile target
  const [UserName, setUserName] = useState("");
  // function update
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(updateProfile({ UserName, token }));
    setUserName('')
  };

  return (
    <div className="Edit">
      { btnEdit ? (
        <button className="edit-button" onClick={() => setEditBtn(false)}>
          Edit user info
        </button>
      ) : (
        <form className="Edit_form" onSubmit={handleEdit}>
          <div className="Edit_div">
            <label htmlFor="name" className="label">
              User_name:
            </label>
            <input
              type="text"
              name="name"
              id=""
              className="input"
              value={UserName}
              placeholder={profile.userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="Edit_div">
            <label htmlFor="" className="label">
              First_name:
            </label>
            <input
              type="text"
              name=""
              id=""
              className="input_"
              placeholder={profile.firstName}
              disabled
            />
          </div>

          <div className="Edit_div">
            <label htmlFor="" className="label">
              Last_name:
            </label>
            <input
              type="text"
              name=""
              id=""
              className="input_"
              placeholder={profile.lastName}
              disabled
            />
          </div>
          <div className="Edit_btn">
            <button className="btn" onClick={() => setEditBtn(false)} >
              Save
            </button>
            <button className="btn" onClick={(e) => { e.preventDefault(); setEditBtn(true); }}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
