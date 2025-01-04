import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { Input } from "@/components/ui/input";
import JobCard from "../component/JobCard";
import JobRecommendationCard from "../component/JobRecommendationCard";
import CompanyCard from "../component/CompanyCard";
import "aos/dist/aos.css";
import AOS from "aos";
import Marquee from "react-fast-marquee";
import { CompanyCardProps } from "../props/CompanyCardProps";
import { CompanyVacancyWithApplyCountProps } from "../props/CompanyVacancyProps";
import axios from "axios";
import Spinner from "../component/Spinner";
import { useToast } from "@/components/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const nav = useNavigate();
  const [companies, setCompanies] = useState<CompanyCardProps[]>([]);
  const [vacancies, setVacancies] = useState<
    CompanyVacancyWithApplyCountProps[]
  >([]);
  const [companyLoading, setCompanyLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    async function getAllCompany() {
      setCompanyLoading(true);
      try {
        const response = await axios.get(
          import.meta.env.VITE_API + "company/getAll"
        );
        setCompanies(response.data);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Something went wrong!",
          description: "Inform admin immediately",
        });
      }
      setCompanyLoading(false);
    }

    async function getAllJob() {
      try {
        const body = {
          location: "",
          workTimeType: "",
          jobTypeId: "",
          searchKeyword: "",
        };
        const response = await axios.post(
          import.meta.env.VITE_API + "getJobVacancyWithFilter",
          body
        );
        setVacancies(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    AOS.init({ duration: 500 });
    getAllCompany();
    getAllJob();
  }, []);

  return (
    <Layout>
      <div className="mx-[60px]">
        <div
          className="bg-[#120272] text-white p-[24px] mt-[30px] rounded-lg"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <div className="text-[32px]">Welcome Back Rico!!</div>
          <div className="mt-[10px]">
            We're excited to help you find your next opportunity! Start your job
            search today by browsing our latest vacancies or updating your
            profile to attract the best employers. Whether you're looking to
            advance your career or explore new paths, we're here to support you
            every step of the way.
          </div>
          <div className="mt-[30px] w-[30%]">
            <Input
              placeholder={"Let's find a job for you"}
              className="text-black"
              onClick={() => nav("/browse-job")}
            />
          </div>
        </div>

        <div className="my-[50px]" data-aos="fade-up" data-aos-once="true">
          <div className="text-[24px] font-medium mb-2 text-center">
            Job Recommendation
          </div>

          <div className="mt-4 mb-8">
            Based on your profile and recent activity, we've handpicked some
            exciting job opportunities that match your skills and career goals.
            Explore these tailored recommendations and take the next step
            towards your dream job. Keep your profile updated to receive more
            accurate suggestions!
          </div>

          <div className="flex justify-between mt-6">
            <JobRecommendationCard JobName={"Front End Developer"} Index={1} />
            <JobRecommendationCard JobName={"Back End Developer"} Index={2} />
            <JobRecommendationCard JobName={"AI Engineer"} Index={3} />
            <JobRecommendationCard JobName={"Full Stack Developer"} Index={4} />
          </div>
        </div>

        <div
          className="mb-[100px] mt-20"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <Marquee speed={30}>
            <img
              src={"https://logodix.com/logo/81176.jpg"}
              className="h-[150px] mx-4"
            />
            <img
              src={
                "https://logodownload.org/wp-content/uploads/2014/09/nvidia-logo-0.png"
              }
              className="h-[150px] mx-4"
            />
            <img
              src={
                "https://www.grand-indonesia.com/wp-content/uploads/2023/11/BLIBLI.jpg"
              }
              className="h-[150px] mx-4"
            />
            <img
              src={
                "https://th.bing.com/th/id/OIP.fqZ9-PPqcG_cm0k3JfoINQHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              }
              className="h-[150px] mx-4"
            />
            <img
              src={"https://logodix.com/logo/81176.jpg"}
              className="h-[150px] mx-4"
            />
            <img
              src={
                "https://th.bing.com/th/id/R.ff70d9d943a71067cb9e0f061c078fd0?rik=YDbEo%2fzsssVmPA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-HL8IH_ZHKvI%2fUl-kk_7AC_I%2fAAAAAAAAC6M%2fb7BWRYGdn8w%2fs1600%2fBCA-Bank-Logo-blue.png&ehk=7%2fTz85jERnSu1EVuPQi4qCQHtzNt%2bxTv%2fZiS0x4waYM%3d&risl=&pid=ImgRaw&r=0"
              }
              className="h-[150px] mx-4"
            />
            <img
              src={
                "https://th.bing.com/th/id/OIP.crQMHBUsc2j7Hp0DTjJsUwHaHa?rs=1&pid=ImgDetMain"
              }
              className="h-[150px] mx-4"
            />
            <img
              src={
                "https://purepng.com/public/uploads/large/purepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png"
              }
              className="h-[150px] mx-4"
            />
          </Marquee>
        </div>

        <div className="my-[50px]" data-aos="fade-up" data-aos-once="true">
          <div className="text-[24px] font-medium mb-2 text-center">
            Popular Job
          </div>
          <div>
            These positions are trending among job seekers for their competitive
            salaries, growth opportunities, and dynamic work environments.
            Whether you're looking to advance your career or find a role that
            matches your passion, these popular jobs are in high demand. Don't
            miss your chance to apply!
          </div>

          {vacancies.length < 1 ? (
            <div className="text-center my-[100px]">
              There is no vacancy. Stay tune
            </div>
          ) : (
            <div className="grid grid-cols-5 mt-6 gap-10">
              {vacancies.map((vacancy, idx) => {
                return idx > 4 ? (
                  ""
                ) : (
                  <JobCard
                    Id={vacancy.jobVacancy.id}
                    JobName={vacancy.jobVacancy.jobPosition}
                    CompanyName={vacancy.jobVacancy.company.name}
                    Image={vacancy.jobVacancy.company.logoUrl}
                  />
                );
              })}
            </div>
          )}
        </div>

        <div className="my-[70px]" data-aos="fade-up" data-aos-once="true">
          <div className="text-[24px] font-medium mb-2 text-center">
            Top Companies for Software Developers
          </div>
          <div>
            These companies are known for their exciting projects, advanced
            technologies, and great work environments. If you're looking to grow
            your career as a software developer, these are the places to be.
            Check out the opportunities they offer!
          </div>

          {companyLoading ? (
            <div className="flex justify-center mt-10">
              <Spinner />
            </div>
          ) : companies.length === 0 ? (
            <div className="text-center my-[100px]">
              There is no company. Stay tune
            </div>
          ) : (
            <div className="grid grid-cols-3 mt-6 gap-10 mx-">
              {companies.map((company: CompanyCardProps, idx: number) => {
                return (
                  <CompanyCard
                    id={company.id}
                    name={company.name}
                    logoUrl={company.logoUrl}
                    location={company.location}
                    VacancyCount={10}
                    description={company.description}
                    key={idx}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
