import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { getAllPosts } from "../../services/index/posts";
import ArticleCardSkeleton from "../../components/ArticleCardSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import ArticleCard from "../../components/ArticleCard";
import MainLayout from "../../components/MainLayout";
import Pagination from "../../components/Pagination";
import { useSearchParams } from "react-router-dom";
import Search from "../../components/Search";

let isFirstRun = true;

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortOrder, setSortOrder] = useState("createdAt_desc");

  const searchParamsValue = Object.fromEntries([...searchParams]);

  const currentPage = parseInt(searchParamsValue?.page) || 1;
  const searchKeyword = searchParamsValue?.search || "";

  const { data, isLoading, isError, isFetching, refetch } = useQuery({
    queryFn: () => getAllPosts(searchKeyword, currentPage, 12),
    queryKey: ["posts"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isFirstRun) {
      isFirstRun = false;
      return;
    }
    refetch();
  }, [currentPage, searchKeyword, refetch]);

  const handlePageChange = (page) => {
    setSearchParams({ page, search: searchKeyword });
  };

  const handleSearch = ({ searchKeyword }) => {
    setSearchParams({ page: 1, search: searchKeyword });
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  let sortedPosts = [];
  if (data?.data) {
    sortedPosts = [...data.data];
    if (sortOrder === "createdAt_asc") {
      sortedPosts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else {
      sortedPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
  }

  return (
    <MainLayout>
      <section className="flex flex-col container mx-auto px-5 py-10">
        <div className="flex justify-between items-center mb-10">
          <Search className="w-full max-w-xl" onSearchKeyword={handleSearch} />
          <select
            className="rounded-lg px-3 py-2 bg-gray-100 focus:outline-none"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="createdAt_desc">Последние</option>
            <option value="createdAt_asc">Старые</option>
          </select>
        </div>
        <div className=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
          {isLoading || isFetching ? (
            [...Array(3)].map((item, index) => (
              <ArticleCardSkeleton
                key={index}
                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
              />
            ))
          ) : isError ? (
            <ErrorMessage message="Couldn't fetch the posts data" />
          ) : sortedPosts.length === 0 ? (
            <p className="text-orange-500">No Posts Found!</p>
          ) : (
            sortedPosts.map((post) => (
              <ArticleCard
                key={post._id}
                post={post}
                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
              />
            ))
          )}
        </div>
        {!isLoading && (
          <Pagination
            onPageChange={(page) => handlePageChange(page)}
            currentPage={currentPage}
            totalPageCount={JSON.parse(data?.headers?.["x-totalpagecount"])}
          />
        )}
      </section>
    </MainLayout>
  );
};

export default BlogPage;
