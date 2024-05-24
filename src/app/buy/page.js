"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Image from 'next/image'
import TicketCategoryItem from "@/components/TicketCategoryItem";
import { useState } from "react";
import { Lightbox } from "react-modal-image";
import { ticketCategories } from "@/data/ticketCategories"


export default function Buy() {

  const [isEventInfoListOpen, setEventInfoVisibility] = useState(false)
  const [isPhotoModalActive, setPhotoModalActive] = useState(false)

  const router = useRouter();
  const data = useSelector((state) => state.buyTicketModalState);
  if (data.id < 1) {
    router.push("/");
    return;
  }

  const showOrHideInfo = () => {
    setEventInfoVisibility(!isEventInfoListOpen)
  }

  return (
    <>
      {
        isPhotoModalActive && (
          <Lightbox
            medium={"/images/oturmaPlani.jpeg"}
            onClose={() => setPhotoModalActive(false)}
          />
        )
      }
      <div style={{ marginTop: 90, backgroundColor: "#f1f1f1" }}>
        <div className="section-indent05">
          <div className="container">
            <div className="row">
              <div className="col-md-6" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h4 className="tt-subtitle" style={{ paddingBottom: 0, fontWeight: 300 }}>Kategori seçin</h4>
                <h5 style={{ marginBottom: 20, color: "#b5b5b5" }}>Satın almak istediğiniz kategoriyi seçebilirsiniz.</h5>

                <div style={{ width: "100%", gap: 20, display: "flex", flexDirection: "column" }}>
                  <div className="tt-width-01" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                    <span style={{ fontSize: 20, color: "#252427" }}>Ayçin Asan Konseri</span>
                    <span style={{ fontSize: 14 }}>Skyfall Arena / Muğla</span>
                    <div style={{ width: "100%", padding: "0 50px" }}>
                      <div style={{ width: "100%", display: "flex", justifyContent: "space-between", margin: "10px 0", padding: "0 20px" }}>
                        <span style={{ color: "#252427", fontWeight: "bold" }}>Kategori Seçin</span>
                        <span style={{ color: "#252427", fontWeight: "bold" }}>Bilet Satın Al</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                        {
                          ticketCategories.map((item, index) => <TicketCategoryItem key={index} data={item} />)
                        }
                      </div>
                    </div>
                  </div>

                  <div className="tt-width-01 eventInformation" style={{ width: "100%" }}>
                    <div class="box-header">
                      <h3 class="box-header-title">Etkinlik Hakkında Bilmeniz Gerekenler</h3>
                    </div>
                    <div className="rules">
                      <ul className={isEventInfoListOpen ? "scroll-dark active" : "scroll-dark"}>
                        <p>Kapı Açılış : 22.00</p>
                        <p>Etkinlikte 18 yaş sınırı vardır.</p>
                        <p>Mekan girişinde kadın-erkek eşitliğine önem verilmektedir. Organizatör bu kurala aykırılık oluşturan kişileri etkinlik mekanına almama hakkına sahiptir.<br />Biletler dönemsel olarak fiyat değişikliği göstermektedir.<br />Organizatör firma etkinlik için uygun görmediği kişileri içeri almama hakkına sahiptir.<br />Organizasyon şirketi, öngörülmeyen ve kaçınılmaz nedenlerden ötürü programda her türlü değişiklik yapma hakkını saklı tutar.<br />Etkinlik alanına dışarıdan yiyecek ve içecek alınmamaktadır.<br />Etkinlik alanına profesyonel ses ve görüntü araçları (video kamera ve fotoğraf makinası) ile girilmemektedir.<br />Etkinlik süresince kayıt yapılmasına izin verilmeyecektir.<br />Etkinlik alanına yanıcı, patlayıcı (deodorant, sprey, parfüm, kolonya vb. gibi), parlayıcı, kesici ve delici olarak kullanılabilecek her türlü alet, termos, motor kaskı ve lazer imleci ile girilmemektedir.<br />Tüm katılımcıların kimliklerini yanlarında bulundurması ve istendiğinde ibraz etmeleri gerekmektedir.<br />Etkinlik alanında yanınızda bulunan eşyaların sorumluluğunun size ait olduğunu hatırlatmak isteriz.<br />Güvenlik personeli, etkinlik alanına giren herkesi güvenlik aramasına tabii tutacaktır.<br />Etkinlik biletleri sadece organizasyon sahibi tarafından belirlenen resmi satış noktalarından alınmalıdır.<br />Organizasyon sahibi resmi satış noktalarından alınmayan biletlerin sahiplerini etkinlik alanından çıkarma hakkına sahiptir.<br />Etkinlik biletleri devredilemez ve iade edilemez. Kayıp biletler için yenisi basılmayacaktır.<br />Satın alınan bilet yazılı izin alınmadığı taktirde; reklam, yarışma, çekiliş,promosyon vb. Kişisel kullanım haricinde ticari ya da ticari olmayan amaçlarda kullanılamaz. Bu amaçla kullanılan biletler iptal edilecektir ve yasal işlem başlatılacaktır.<br />Etkinliğe katılan kişilerin fotoğraf ve video çekimlerinin tanıtım materyallerinde kullanım hakkı etkinlik organizasyonuna ait olup katılımcı etkinliğe katılarak bu hakkın kullanılmasını kabul etmektedir.<br />Profesyonel olmayan cihazlarla, katılımcıları ve sanatçıları rahatsız edecek ve özel hayat gizliliğini ihlal edecek çekim yapılmamasına özen gösterilmelidir.</p>
                        <p>Etkinlik Ceysa Otomotiv tarafından düzenlenmektedir.&nbsp;</p>
                      </ul>
                      <div className={isEventInfoListOpen ? "rules-read-more-area active" : "rules-read-more-area"}>
                        <button onClick={showOrHideInfo} className={isEventInfoListOpen ? "rules-read-more active" : "rules-read-more"}>
                          <span>{isEventInfoListOpen ? "Devamını Gizle" : "Devamını Göster"}</span>
                          <svg className={isEventInfoListOpen ? "arrow active" : "arrow"} width="22px" height="22px" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <path d="M4.58335 9.16669C4.58293 8.95251 4.65753 8.74495 4.79418 8.58003C4.87114 8.48721 4.96565 8.41048 5.0723 8.35424C5.17895 8.298 5.29565 8.26335 5.41571 8.25228C5.53577 8.24121 5.65684 8.25394 5.77197 8.28973C5.88711 8.32552 5.99405 8.38367 6.08668 8.46086L11 12.5675L15.9225 8.60753C16.0163 8.53138 16.1242 8.47452 16.24 8.44021C16.3558 8.4059 16.4772 8.39481 16.5973 8.40759C16.7175 8.42036 16.8339 8.45675 16.9399 8.51466C17.0459 8.57257 17.1394 8.65086 17.215 8.74503C17.2985 8.83987 17.3614 8.95094 17.3999 9.07126C17.4384 9.19159 17.4516 9.31857 17.4387 9.44424C17.4258 9.5699 17.387 9.69155 17.3249 9.80153C17.2627 9.91152 17.1785 10.0075 17.0775 10.0834L11.5775 14.5109C11.4135 14.6457 11.2078 14.7194 10.9954 14.7194C10.7831 14.7194 10.5774 14.6457 10.4133 14.5109L4.91335 9.92753C4.80242 9.83557 4.71473 9.71875 4.65739 9.58656C4.60005 9.45437 4.57469 9.31052 4.58335 9.16669Z" fill="currentColor"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider d-block d-md-none"></div>
              <div className="col-md-6" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h6 className="tt-subtitle" style={{ paddingBottom: 0, fontWeight: 300 }}>Oturma Planı</h6>
                <h5 style={{ marginBottom: 20, color: "#b5b5b5" }}>Mekanın oturma planını görebilirsiniz</h5>
                <div onClick={() => setPhotoModalActive(true)} className="oturmaPlani">
                  <Image width={500} height={500} src={"/images/oturmaPlani.jpeg"} />
                  <span className="ZoomPhotoIcon">
                    <svg color="#252427" width="40px" height="40px" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                      <path d="M21.7726 15.1417H17.7394V10.5616C17.7394 10.4113 17.6163 10.2882 17.4659 10.2882H15.4152C15.2648 10.2882 15.1417 10.4113 15.1417 10.5616V15.1417H11.1085C10.9581 15.1417 10.8351 15.2648 10.8351 15.4152V17.4659C10.8351 17.6163 10.9581 17.7394 11.1085 17.7394H15.1417V22.3195C15.1417 22.4699 15.2648 22.5929 15.4152 22.5929H17.4659C17.6163 22.5929 17.7394 22.4699 17.7394 22.3195V17.7394H21.7726C21.923 17.7394 22.046 17.6163 22.046 17.4659V15.4152C22.046 15.2648 21.923 15.1417 21.7726 15.1417ZM31.4796 29.6339L26.4894 24.6437C30.6627 19.5543 30.3722 12.0143 25.6007 7.24622C20.5421 2.1842 12.3253 2.1842 7.24622 7.24622C2.1842 12.3253 2.1842 20.5421 7.24622 25.6007C12.0143 30.3722 19.5543 30.6627 24.6437 26.4894L29.6339 31.4796C29.7433 31.5753 29.9176 31.5753 30.0099 31.4796L31.4796 30.0099C31.5753 29.9176 31.5753 29.7433 31.4796 29.6339ZM23.7892 23.7892C19.7286 27.8463 13.1525 27.8463 9.09192 23.7892C5.03479 19.7286 5.03479 13.1525 9.09192 9.09192C13.1525 5.03479 19.7286 5.03479 23.7892 9.09192C27.8463 13.1525 27.8463 19.7286 23.7892 23.7892Z" fill="currentColor"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
