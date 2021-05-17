import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuAppBar from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format, formatDistance } from "date-fns";
import {
  faEdit,
  faHeart,
  faPencilAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const UserProfile = (props) => {
  return (
    <>
      <MenuAppBar />
      <article className="UserProfile">
        <NameAndPhoto
          name={"hiroki"}
          imgSrc={require("../images/newPanda.png")}
        />
        <hr />
        <MyResources
          title={"Example Title"}
          category={"Example Category"}
          description={"Example Description"}
          link={"www.google.com"}
          onFavorite={() => {
            alert("Favorite");
          }}
        />
        <hr />
        <div className="UserNote">
          <NewNote />
          <hr />
          <PostedNote
            note={"Here is a note on how I am feeling today."}
            onEdit={() => {
              alert("Edit");
            }}
            onDelete={() => {
              alert("Delete");
            }}
          />
        </div>
      </article>
    </>
  );
};

const NameAndPhoto = (props) => {
  return (
    <div className="NameAndPhoto">
      <img
        className="Avatar"
        src={props.imgSrc}
        alt={props.name}
        width="200"
        height="150"
      />
      <div className="NameAndEdit">
        <h2 className="UserName">{props.name} </h2>
      </div>
    </div>
  );
};

const MyResources = (props) => {
  const [favourited, setFavourited] = useState(null);

  const fetchFavourited = async () => {
    const response = await axios.get(
      `http://localhost:8080/api/favourites/favourited/`
    );
    console.log("MYRE", response);
    setFavourited(response.data);
  };
  // console.log("favourited state", favourited)

  const toggleFavourite = async (id) => {
    const response = await axios.post(
      `http://localhost:8080/api/favourites/toggle/${id}`
    );

    setFavourited((liveFavourited) => {
      return liveFavourited.filter((favourite) => {
        return favourite.id !== id;
      });
    });
  };

  useEffect(() => {
    fetchFavourited();
  }, []);

  return (
    <div className="Resource">
      <h3>- my favourites -</h3>
      <div>{/* Render Resource Box From Resource Page */}</div>
      {favourited &&
        favourited.map((favourite) => {
          return (
            <section className="ResourceBox" key={favourite.id}>
              <h4>{favourite.title}</h4>
              <h6>{favourite.category}</h6>
              {/* <h5>{favourite.content}</h5> */}
              <a
                href={favourite.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                click me
              </a>
              <FontAwesomeIcon
                onClick={() => {
                  toggleFavourite(favourite.id);
                }}
                className="Heart"
                icon={faHeart}
              />
            </section>
          );
        })}
    </div>
  );
};

const NewNote = (props) => {
  const [postReg, setPostReg] = useState("");

  const wall = () => {
    // console.log('wall test', postReg)
    axios
      .post("http://localhost:8080/api/posts/profile/create", {
        body: postReg,
      })
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <div>
      <h3>
        leave yourself a note{" "}
        <FontAwesomeIcon className="PencilIcon" icon={faPencilAlt} />
      </h3>
      <label htmlFor="inp" className="inp">
        <input
          type="text"
          placeholder="&nbsp;"
          onChange={(e) => {
            setPostReg(e.target.value);
          }}
        ></input>
        <span className="label"> </span>
        <span className="focus-bg"></span>
        <div onClick={wall} className="SubmitNote" type="submit">
          submit
        </div>
      </label>
    </div>
  );
};

const PostedNote = (props) => {
  const [notes, setNotes] = useState(null);
  // console.log("NOTES11", notes)
  const fetchNotes = async () => {
    const response = await axios.get(`http://localhost:8080/api/posts/notes`);
    // console.log("NOTES", response)
    setNotes(response.data);
    // console.log("NOTES DATA", response.data)
  };

  const deleteNote = (id) => {
    axios
      .delete(`http://localhost:8080/api/posts/notes/delete/${id}`)
      .then(() => {
        window.location.reload();
      });
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="PostedNote">
      {notes &&
        notes.map((note) => {
          return (
            <section className="Notes" key={note.id}>
              <p>{note.body}</p>
              <div className="EditTrashIcon">
                <p>
                  <em>{format(new Date(note.time_stamp), "dd/MM/yyyy")}</em>
                </p>
                <FontAwesomeIcon
                  onClick={() => deleteNote(note.id)}
                  className="TrashIcon"
                  icon={faTrashAlt}
                />
              </div>
            </section>
          );
        })}
    </div>
  );
};

export default UserProfile;
