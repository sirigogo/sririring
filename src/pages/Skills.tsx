import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useLocation } from "react-router-dom";
ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartDataItem {
  datasets: [
    {
      data: number[];
      backgroundColor: string[];
      cutout: string;
      borderWidth: number;
      borderRadius: number;
    }
  ];
}

const Skills = () => {
  const originItems: ChartDataItem[] = [
    {
      datasets: [
        {
          data: [90, 10],
          backgroundColor: ["rgba(255, 255, 255,0.7)", "rgba(0, 0, 0,0)"],
          cutout: "95%",
          borderWidth: 0,
          borderRadius: 50,
        },
      ],
    },
    {
      datasets: [
        {
          data: [85, 15],
          backgroundColor: ["rgba(255, 255, 255,0.7)", "rgba(0, 0, 0,0)"],
          cutout: "95%",
          borderWidth: 0,
          borderRadius: 50,
        },
      ],
    },
    {
      datasets: [
        {
          data: [90, 10],
          backgroundColor: ["rgba(255, 255, 255,0.7)", "rgba(0, 0, 0,0)"],
          cutout: "95%",
          borderWidth: 0,
          borderRadius: 50,
        },
      ],
    },
    {
      datasets: [
        {
          data: [70, 30],
          backgroundColor: ["rgba(255, 255, 255,0.7)", "rgba(0, 0, 0,0)"],
          cutout: "95%",
          borderWidth: 0,
          borderRadius: 50,
        },
      ],
    },
    {
      datasets: [
        {
          data: [95, 5],
          backgroundColor: ["rgba(255, 255, 255,0.7)", "rgba(0, 0, 0,0)"],
          cutout: "95%",
          borderWidth: 0,
          borderRadius: 50,
        },
      ],
    },
    {
      datasets: [
        {
          data: [95, 5],
          backgroundColor: ["rgba(255, 255, 255,0.7)", "rgba(0, 0, 0,0)"],
          cutout: "95%",
          borderWidth: 0,
          borderRadius: 50,
        },
      ],
    },
    {
      datasets: [
        {
          data: [80, 20],
          backgroundColor: ["rgba(255, 255, 255,0.7)", "rgba(0, 0, 0,0)"],
          cutout: "95%",
          borderWidth: 0,
          borderRadius: 50,
        },
      ],
    },
    {
      datasets: [
        {
          data: [70, 30],
          backgroundColor: ["rgba(255, 255, 255,0.7)", "rgba(0, 0, 0,0)"],
          cutout: "95%",
          borderWidth: 0,
          borderRadius: 50,
        },
      ],
    },
  ];

  const [items, setItems] = useState(originItems);

  const location = useLocation();
  useEffect(() => {
    const newItems: ChartDataItem[] = originItems.map((item) => {
      return {
        datasets: [
          {
            data: location.hash === "#page3" ? item.datasets[0].data : [0, 100],
            backgroundColor: ["rgba(255, 255, 255,0.7)", "rgba(0, 0, 0,0)"],
            cutout: "95%",
            borderWidth: 0,
            borderRadius: 50,
          },
        ],
      };
    });

    setItems(newItems);
  }, [location.hash]);
  return (
    <SkillWrap>
      <div className="inner">
        <h4 className="sectionTitle">
          <img
            src={process.env.PUBLIC_URL + "/assets/img/titleIco.png"}
            alt="리액트 아이콘"
          />
          <p>SKILLS</p>
        </h4>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Doughnut data={item} className="chart" />
              <div>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/assets/img/skill/ico${index + 1}.png`
                  }
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SkillWrap>
  );
};

const SkillWrap = styled.div`
  ul {
    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 100px;
    align-items: center;
    li {
      position: relative;
      width: 230px;
      height: 230px;
      border-radius: 100%;
      transition: all 0.2s;
      margin: 0 auto;
      div {
        position: absolute;
        width: 180px;
        height: 180px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 100%;
        img {
          height: 80px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.9;
        }
      }
    }
  }
  @media (max-width: 1400px) {
    ul {
      margin-top: 100px;
      gap: 50px;
      li {
        width: 210px;
        height: 210px;
        div {
          width: 160px;
          height: 160px;
          img {
            height: 70px;
          }
        }
      }
    }
  }
  @media (max-width: 1200px) {
    ul {
      margin-top: 80px;
      gap: 40px;
      li {
        width: 200px;
        height: 200px;
        div {
          width: 150px;
          height: 150px;
          img {
            height: 60px;
          }
        }
      }
    }
  }
  @media (max-width: 950px) {
    ul {
      margin-top: 30px;
      gap: 40px;
      grid-template-columns: repeat(2, 1fr);
      li {
        width: 200px;
        height: 200px;
        div {
          width: 150px;
          height: 150px;
          img {
            height: 60px;
          }
        }
      }
    }
  }
  @media (max-width: 500px) {
    ul {
      margin-top: 30px;
      gap: 40px;
      grid-template-columns: repeat(2, 1fr);
      li {
        width: 150px;
        height: 150px;
        div {
          width: 100px;
          height: 100px;
          img {
            height: 60px;
          }
        }
      }
    }
  }
`;

export default Skills;
