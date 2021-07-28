import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import Axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Yad2Context } from "../../../../context/Yad2Context";
import Post from "./Post";
import PostTablet from "./PostTablet";
import { dbUrl } from "../../../../context/LoginContext";
import { SearchContext } from "../../../../context/SearchContext";

const PostsContainer = () => {
  const { screenWidth } = useContext(Yad2Context);
  const {
    listings,
    setListings,
    areaSearch,
    assetTypes,
    PriceRange,
    advancedSearchOptions,
    numOfRooms,
    setNumOfListings,
  } = useContext(SearchContext);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const removeDuplicates = (set) => {
    const unique = [];
    for (let i = 0; i < [...set].length; i++) {
      if (!unique.includes([...set][i])) unique.push([...set][i]);
    }
    return unique;
  };

  useEffect(() => {
    const filters = {
      areaSearch,
      assetTypes,
      PriceRange,
      advancedSearchOptions,
      numOfRooms,
    };
    let flag = true;
    const getFirstPosts = async () => {
      await Axios.get(`${dbUrl}listings/advanced`, {
        params: {
          filters,
        },
      })
        .then((res) => {
          setListings(res.data.data);
          setNumOfListings(res.data.length);
        })
        .catch((e) => console.log(e));
    };
    if (flag) getFirstPosts();
    return (flag = false);
  }, []);

  useLayoutEffect(() => {
    const scrollEvent = (e) => {
      const win = e.target.scrollingElement;
      setIsScrolledToBottom(false)
      setTimeout(()=> {
        setIsScrolledToBottom(win.scrollHeight - win.scrollTop === win.clientHeight);
      }, 500)
    };
    window.addEventListener("scroll", scrollEvent);
    // return window.removeEventListener('scroll', scrollEvent)
  }, []);

  useEffect(() => {
    const filters = {
      areaSearch,
      assetTypes,
      PriceRange,
      advancedSearchOptions,
      numOfRooms,
    };
    const getMorePosts = async () => {
      await Axios.get(`${dbUrl}listings/advanced`, {
        params: {
          last: listings[listings.length - 1],
          included: listings.map((listing) => listing._id),
          filters,
        },
      })
        .then((res) => {
          const set = new Set([...listings.concat(res.data.data)]);
          setListings(removeDuplicates(set));
        })
        .then(() => setIsLoading(false));
    };
    if (isScrolledToBottom) {
      setIsLoading(true);
      getMorePosts();
    }

  }, [isScrolledToBottom]);

  return (
    <div className={(screenWidth > 960 ? "" : "mobile-") + "posts__container"}>
      {listings?.map((listing) =>
        screenWidth > 960 ? (
          <Post key={Math.random()} post={listing} />
        ) : (
          <PostTablet key={Math.random()} post={listing} />
        )
      )}
      {isLoading && (
        <div className="loading-spinner__container">
          <Loader
            type="Oval"
            color="#ff7100"
            height={32}
            width={32}
            className="spinner"
          />
        </div>
      )}
    </div>
  );
};

export default PostsContainer;
