import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

import Spinner from "../Layout/Spinner";
import ReposContent from "../Repos/ReposContent";

import GithubContext from "../../Context/Github/Context";

const User = () => {
  const { username } = useParams();
  const context = useContext(GithubContext);

  useEffect(() => {
    context.getUser(username);
    context.getUserRepo(username);
  }, []);

  const {
    name,
    avatar_url,
    bio,
    blog,
    html_url,
    email,
    followers,
    following,
    login,
    public_repos,
  } = context.user;

  if (context.loading) return <Spinner />;

  return (
    <>
      <Link to="/" className="btn btn-light">
        Back To Search
      </Link>

      <div className="items-center flex flex-col mb-5 px-5 h-auto">
        <h1 className="text-4xl font-bold my-5 text-center">{name} GitHub</h1>
        <div className="card lg:card-side card-bordered border-white flex md:px-5 py-5 w-full md:w-5/12">
          <div className="avatar flex items-center justify-center">
            <div className="mb-8 rounded-full w-40 h-40 ">
              <img alt="avatar" src={avatar_url} />
            </div>
          </div>

          <div className="card-body flex items-center p-0 sm:p-5">
            <h1 className="card-title text-3xl">{name}</h1>
            <div className="badges my-1 flex w-full justify-evenly flex-wrap">
              <div className="badge badge-primary cursor-pointer ">
                <a href={`https://github.com/${login}?tab=repositories`}>
                  <b>Repos: {public_repos}</b>
                </a>
              </div>
              <div className="badge badge-secondary cursor-pointer ">
                <a href={`https://github.com/${login}?tab=followers`}>
                  <b>Seguidores: {followers}</b>
                </a>
              </div>
              <div className="badge badge-accent cursor-pointer">
                <a href={`https://github.com/${login}?tab=following`}>
                  <b>Seguindo: {following}</b>
                </a>
              </div>
            </div>
            <div className="mt-3 flex items-center">
              {email && <GoLocation />}

              <p className="ml-2 text-xl">{email}</p>
            </div>

            <div className="mt-3 flex items-center">
              <p className="ml-2 text-xl">{bio}</p>
            </div>

            <div className="blog flex items-center ">
              {blog && <BsLinkedin />}
              <a className="ml-2" href={`${blog}`}>
                {blog}
              </a>
            </div>
            <div className="card-actions">
              <a href={`${html_url}`} className="btn btn-outline ">
                <BsGithub className="mr-2 text-lg" />
                View Profile
              </a>
            </div>
          </div>
        </div>

        <div className="w-12/12 h-2/5 mt-10 ">
          <h1 className="text-3xl text-center font-bold ">Repositories</h1>
          <p className="text-center font-bold text-2xl">({public_repos})</p>
          <div className="border-l-2 mt-10">
            <ReposContent repositories={context.repos} />
          </div>
          {public_repos > 30 && (
            <a href={`${html_url}`} className="btn btn-outline w-full">
              View all repos
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default User;
