import { useParams } from "react-router";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/shared/Loading/Loading"; // আমরা একটি লোডিং কম্পোনেন্ট ব্যবহার করছি

const ArticleDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ loading state

  useEffect(() => {
    setLoading(true); // ডেটা fetch করার আগে loading true
    axiosSecure
      .get(`/article/${id}`)
      .then((res) => setArticle(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false)); // ডেটা আসার পর loading false
  }, [id, axiosSecure]);

  // যদি ডেটা আসছে, loading দেখাও
  if (loading) return <Loading />;

  if (!article)
    return <div className="text-center py-10 text-gray-500">No article found</div>;

  return (
    <div className="max-w-3xl mx-auto p-4 mt-30 mb-20">
      <img src={article.image} className="w-full rounded mb-4" alt={article.title} />
      <h1 className="text-2xl font-bold mb-2">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-4">Publisher: {article.publisher}</p>
      <p className="text-gray-700">{article.description}</p>
    </div>
  );
};

export default ArticleDetails;
