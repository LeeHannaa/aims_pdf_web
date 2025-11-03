import "../App.css";

export const Footer = () => {
  return (
    <div className="Footer-div">
      <div className="Footer-div-left">
        <span>대표이사 박진효</span>
        <span>대구광역시 달서구 성서공단로11길 32, 연구1동 412호</span>
        <span>T. 053 - 585 - 0979</span>
      </div>
      <div
        className="Footer-div-right"
        onClick={() => window.open("https://aims.kr/HCP01_001", "_blank")}
      >
        <span>회사소개</span>
      </div>
    </div>
  );
};
