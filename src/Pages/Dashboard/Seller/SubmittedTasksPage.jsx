import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import LoaderSpinner from "../../../Components/Loader/LoaderSpinner";
import axios from "axios";
import { useParams } from "react-router";
import SubmissionDetailCard from "./SubmissionDetailCard";

const SubmittedTasksPage = () => {
  const { id } = useParams();

  console.log(id);

  const { user } = useAuth();

  const { data: submissions = [], isPending } = useQuery({
    queryKey: ["contest", user?.email],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/submit-task?contestId=${id}`
      );
      return result.data;
    },
  });

  console.log(submissions);

  if (isPending) return <LoaderSpinner></LoaderSpinner>;

  return (
    <div>
      {submissions && submissions.length > 0 ? (
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {submissions.map((submission, i) => (
            
            <SubmissionDetailCard key={i} submission={submission}></SubmissionDetailCard>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SubmittedTasksPage;
