import { Slide } from "react-awesome-reveal"
import { InformationSectionItem } from "."

const InformationSection = () => {
  return (
    <div className="flex flex-col gap-20 items-center w-[80%] md:w-[65%] mx-auto mt-7"> 
          <Slide className="overflow-hidden rounded-[40px] shadow-2xl" delay={100}>
            <InformationSectionItem 
                title="Mengapa Anda harus peduli dengan polusi udara?"
                content="Banyak orang menderita polusi udara tanpa menyadarinya. Anda bisa menjadi salah satunya! Sebagian besar umat manusia tidak memahami betapa seriusnya situasi ini. 7 juta - ini adalah jumlah orang yang meninggal SECARA PREMATUR akibat polusi udara dan dampaknya. Polusi udara juga sangat mungkin berkontribusi terhadap kematian banyak orang lanjut usia. Gejala akibat polusi udara seringkali dianggap remeh. Hal ini merupakan suatu kesalahan, karena dalam jangka panjang dapat menimbulkan penyakit serius seperti kanker paru-paru, stroke, jantung, penyakit pernafasan akut dan kronis. Oleh karena itu, menjaga kebersihan udara sangatlah penting. Dengan menjaga udara bersih, kita menjaga kesehatan kita."
            />
          </Slide>
          <Slide className="overflow-hidden rounded-[40px] shadow-2xl" direction="right" delay={100}>
            <InformationSectionItem
                title="Apa yang dapat Anda lakukan untuk memerangi polusi udara?"
                content="Dalam upaya memerangi polusi udara, hal terbaik yang dapat Anda lakukan adalah memberi tahu orang lain tentang masalah ini, menentang penebangan tanaman yang menghilangkan CO2, dan mendukung yayasan yang menanam lebih banyak tanaman. Meskipun pemberantasan polusi saat ini sangat diperlukan, hal ini hanyalah setengah dari permasalahan – sumber polusi udara juga perlu diberantas. Penting untuk diingat bahwa meskipun satu orang tidak dapat berbuat banyak, sekelompok orang dapat berbuat lebih banyak. Hal-hal yang dapat dilakukan antara lain: mengubah moda transportasi - sebaiknya mengganti berkendara dengan kereta api, bus, sepeda atau jalan kaki sederhana (jika tidak memungkinkan, mengganti mobil ke mobil hybrid atau listrik merupakan langkah yang tepat. arah), Anda juga dapat mempertimbangkan pemanas rumah untuk listrik atau gas."
            />
          </Slide>
      </div>
  )
}

export default InformationSection