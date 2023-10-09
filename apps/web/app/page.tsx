import Image from 'next/image';
import MemberJson from '../data/member.json';
import { Check, MessageSquare } from 'lucide-react';

export default async function Index() {
  return (
    <>
      <main className="space-y-36 my-40 mx-12 lg:mx-0">
        <section className="flex flex-col items-center gap-8">
          <div className="bg-gradient-to-b from-zinc-700 to-zinc-400 p-[1.5px] rounded-full w-fit shadow-xl shadow-zinc-700">
            <div className="bg-black px-5 py-2 rounded-full text-white text-xs font-bold tracking-wide">BATCH 3 OPEN REGISTRATION</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 text-center">
            <h1 className="bg-gradient-to-b from-zinc-100 to-zinc-400 bg-clip-text text-transparent text-3xl lg:text-5xl">Fullstack Javascript Bootcamp</h1>
            <h4 className="text-zinc-400">Empower Your Dreams: 8 Weeks to Full Stack Mastery!</h4>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <h4>
              Trusted<span className="text-zinc-500"> by many students</span>
            </h4>
            <div className="flex -space-x-2">
              {MemberJson.map((member, index) => {
                return (
                  <Image
                    key={index}
                    alt="profile"
                    src={member}
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-background-950 hover:scale-125 z-10 transitition duration-200 ease-in-out"
                  />
                );
              })}
              <div className="w-8 h-8 bg-black rounded-full text-xs font-bold flex justify-center items-center text-white z-20">48+</div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-3">
              <div>4.9 stars rating</div>
              <Image
                alt="ratings"
                src="/stars.svg"
                width={120}
                height={32}
                className="rounded-full border-2 border-background-950  z-10 transitition duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="flex gap-4 divide-x-2 space-x-3 items-center">
            <h5>Fast-Pace</h5>
            <h5 className="pl-6">Immersive Program</h5>
            <h5 className="pl-6">Best Practice</h5>
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="border-2 bg-background-900/20 space-y-2 hover:border-background-600 border-background-900/40 p-8 rounded-xl transition duration-300 ease-in-out">
            <h4>HTML</h4>
            <p>Sharpen HTML skills for structured webpages and atomic design.</p>
          </div>
          <div className="border-2 bg-background-900/20 space-y-2 hover:border-background-600 border-background-900/40 p-8 rounded-xl transition duration-300 ease-in-out">
            <h4>CSS</h4>
            <p>Learn how to styling the elements of HTML to bring HTML to life.</p>
          </div>
          <div className="border-2 bg-background-900/20 space-y-2 hover:border-background-600 border-background-900/40 p-8 rounded-xl transition duration-300 ease-in-out">
            <h4>Javascript</h4>
            <p>Learn how to scripting logic to bring webpage to the next level.</p>
          </div>
          <div className="border-2 bg-background-900/20 space-y-2 hover:border-background-600 border-background-900/40 p-8 rounded-xl transition duration-300 ease-in-out">
            <h4>Modern Web Stack</h4>
            <p>Learn to use the modern web stack tools like nodejs and it’s ecosystem </p>
          </div>
          <div className="border-2 bg-background-900/20 space-y-2 hover:border-background-600 border-background-900/40 p-8 rounded-xl transition duration-300 ease-in-out">
            <h4>NextJs</h4>
            <p>Learn how to use NextJs as Fullstack Framework to build any apps.</p>
          </div>
          <div className="border-2 bg-background-900/20 space-y-2 hover:border-background-600 border-background-900/40 p-8 rounded-xl transition duration-300 ease-in-out">
            <h4>Prisma ORM</h4>
            <p>Learn how to build backend databases with this magic tool.</p>
          </div>
        </section>
        <section className="space-y-6 relative">
          <h1 className="absolute top-0 -left-9 text-[72px] hidden lg:block">&quot;</h1>
          <h2 className="font-normal italic text-zinc-500 text-3xl lg:text-4xl ">
            Background saya SEO specialist, ingin tambah ilmu tentang Fullstack JS dan ketemulah Devscale Indonesia. Dan ini adalah investasi terbaik saya di
            tahun 2023, tidak kecewa karena langsung di mentorin mas Indra yg gak pelit ilmu dan semangat buat mengajarnya bikin saya gak menyerah untuk kejar
            mimpi saya untuk jadi lebih baik lagi! Recommended polll!
          </h2>
          <div className="flex items-center gap-4">
            <Image
              src="https://cdn.discordapp.com/avatars/721569530115260476/2af7c1fb74f3621d3f39b92da93fdc49.webp"
              width={32}
              height={32}
              alt="profile"
              className="rounded-full"
            />
            <div>Rahma Safitri- SEO Specialist</div>
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h4 className="text-zinc-500 italic">
              Bootcamp yang seru , mentor yang sangat tulus . Dengan biaya yang semuraah itu , dapet ilmu yang bener-bener bermanfaat, ga bakal pernah nyesel
              yang ikut bootcamp ini.
            </h4>
            <div className="flex items-center gap-4">
              <Image
                src="https://cdn.discordapp.com/avatars/1137626825783246888/7a017e2031bdf21c504c22e57d6d409b.webp"
                width={32}
                height={32}
                alt="profile"
                className="rounded-full"
              />
              <p>Dalilah - Ibu Rumah Tangga</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-zinc-500 italic">
              I hope that many people are interested in and join this bootcamp to enhance their web development skills, especially those who are switching
              careers, like me, or IT professionals looking to update their knowledge in advanced tech stacks such as Next.js and its libraries. I take great
              pleasure in seeing my progress during the bootcamp.
            </h4>
            <div className="flex items-center gap-4">
              <Image
                src="https://cdn.discordapp.com/avatars/532061832567980034/1d35dc4c99a3d6e19758895faf221335.webp"
                width={32}
                height={32}
                alt="profile"
                className="rounded-full"
              />
              <p>Ryan - Backend Dev</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-zinc-500 italic">
              Ini bootcamp beneran kayak Gameshark jaman dulu. Dulu saya belajar topik yang sama mungkin hitungan tahun ga ngerti-ngerti, ini belajar kurang
              dari 2 bulan langsung ngerti. Tidak masuk akal! ...Saking puasnya sama Bootcamp ini, saya udah instruksiin tim saya untuk join batch selanjutnya,
              semoga dia ada waktu dan tenaga buat ikutan.
            </h4>
            <div className="flex items-center gap-4">
              <Image
                src="https://cdn.discordapp.com/avatars/474443174711132170/2e9b2493e7b02badfa2e4357284d7c38.webp"
                width={32}
                height={32}
                alt="profile"
                className="rounded-full"
              />
              <p>Nuha Fadh - Entrepreneur</p>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <h2>What you will learn</h2>
          <div className="w-12 border-b-2 border-primary-500" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border-2 bg-background-900/20 space-y-2 hover:border-background-600 border-background-900/40 p-16 rounded-xl transition duration-300 ease-in-out">
              <div>
                <h4>Week 1</h4>
                <h5 className="text-zinc-500">Introduction to web Development</h5>
              </div>
              <ul className="list-disc list-inside">
                <li>Lecturer & Fullstack Development Intro</li>
                <li>Basic HTML, Elements, Links and Images</li>
                <li>Images Basic CSS and Utilities</li>
                <li>Building Personal site</li>
              </ul>
            </div>

            <div className="border-2 bg-background-900/20 space-y-2 hover:border-background-600 border-background-900/40 p-16 rounded-xl transition duration-300 ease-in-out">
              <div>
                <h4>Week 2</h4>
                <h5 className="text-zinc-500">Javascript Basic and NodeJs</h5>
              </div>
              <ul className="list-disc list-inside">
                <li>Javascript variable & data types </li>
                <li>Javascript array and objects</li>
                <li>Javascript function</li>
                <li>Javascript operators and looping</li>
              </ul>
            </div>

            <div className="border-2 bg-background-900/20 space-y-2 hover:border-background-600 border-background-900/40 p-16 rounded-xl transition duration-300 ease-in-out">
              <div>
                <h4>Week 3</h4>
                <h5 className="text-zinc-500">Javascript Intermediate</h5>
              </div>
              <ul className="list-disc list-inside">
                <li>ES6 and Asynchronous Programming </li>
                <li>DOM Manipulation #1</li>
                <li>DOM Manipulation #2</li>
                <li>Browser API, Cookies and LocalStorage</li>
              </ul>
            </div>

            <div className="border-2 bg-background-900/20 space-y-2 hover:border-background-600 border-background-900/40 p-16 rounded-xl transition duration-300 ease-in-out">
              <div>
                <h4>Week 4</h4>
                <h5 className="text-zinc-500">Modern Web Stack</h5>
              </div>
              <ul className="list-disc list-inside">
                <li>Intro to Modern Web Stack</li>
                <li>TailwindCSS</li>
                <li>NPM Library</li>
                <li>Git, Github and Deployment</li>
              </ul>
            </div>

            <div className="border-2 bg-background-900/20 space-y-2 hover:border-background-600 border-background-900/40 p-16 rounded-xl transition duration-300 ease-in-out">
              <div>
                <h4>Week 5</h4>
                <h5 className="text-zinc-500">Introduction to web Development</h5>
              </div>
              <ul className="list-disc list-inside">
                <li>NextJs - Basic Components and Props NextJs</li>
                <li>NextJs - Routing, and Components</li>
                <li>NextJs - useState and useEffect Hooks</li>
                <li>Building Note-taking app</li>
              </ul>
            </div>

            <div className="border-2 bg-background-900/20 space-y-2 hover:border-background-600 border-background-900/40 p-16 rounded-xl transition duration-300 ease-in-out">
              <div>
                <h4>Week 6</h4>
                <h5 className="text-zinc-500">NextJs as Backend</h5>
              </div>
              <ul className="list-disc list-inside">
                <li>RestFul API - Route Handlers </li>
                <li>Prisma ORM - Basic</li>
                <li>Prisma ORM - Relationship</li>
                <li>Building Backend with NextJs</li>
              </ul>
            </div>

            <div className="border-2 bg-background-900/20 space-y-2 hover:border-background-600 border-background-900/40 p-16 rounded-xl transition duration-300 ease-in-out">
              <div>
                <h4>Week 7</h4>
                <h5 className="text-zinc-500">Building Fullstack Application</h5>
              </div>
              <ul className="list-disc list-inside">
                <li>PRD, ERD, and API Contract </li>
                <li>Boilerplate and Tailwind Setups.</li>
                <li>Database and Backend Setups</li>
                <li>Homepages</li>
              </ul>
            </div>

            <div className="border-2 bg-background-900/20 space-y-2 hover:border-background-600 border-background-900/40 p-16 rounded-xl transition duration-300 ease-in-out">
              <div>
                <h4>Week 8</h4>
                <h5 className="text-zinc-500">Building Fullstack Application</h5>
              </div>
              <ul className="list-disc list-inside">
                <li>Products and Cart </li>
                <li>Dashboard and Image Handling</li>
                <li>Final Touch</li>
                <li>Deployments</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <h2>Lecturer</h2>
          <div className="w-12 border-b-2 border-primary-500" />
          <div className="flex gap-8">
            <Image
              src="https://qph.cf2.quoracdn.net/main-thumb-1748723914-200-rjoonuzcmtrcgqdhsvfrvlslmzaeyilt.jpeg"
              width={80}
              height={80}
              alt="profile"
              className="rounded-xl object-cover w-[120px]"
            />
            <div className="w-[calc(100%-80px)]">
              <h4>Indra Zulfi Mushoddaq</h4>
              <p>3D Tech Lead - Generalist @Designstripe, Canada</p>
              <p className="mt-4 max-w-2xl">
                Indra Zulfi saat ini bekerja sebagai 3D Tech Lead di Designstripe, Canada 🇨🇦. Indra Zulfi bertanggung jawab untuk memimpin project yang
                berkaitan dengan teknologi WebGL dan Render Engine. Indra zulfi juga seorang Former 3D Artist di SSH Design Bahrain, MiddleEast selama 4 tahun.
              </p>
            </div>
          </div>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12">
            <div className="space-y-6">
              <h4 className="text-zinc-500 italic">
                Mas Indra benar-benar mendedikasikan dirinya sebagai mentor. Beliau mengajar dengan penuh semangat sehingga student juga ikut semangat. Beliau
                benar-benar mentor yang kompeten. Materi yang sulit sekalipun dapat disampaikan dengan cara yang mudah dipahami...
              </h4>
              <div className="flex items-center gap-4">
                <Image
                  src="https://cdn.discordapp.com/avatars/749936388132306965/9fad90151967bed9d9c57ab45c405b0c.webp"
                  width={32}
                  height={32}
                  alt="profile"
                  className="rounded-full"
                />
                <p>Jessy Hanifiah - CS Student</p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-zinc-500 italic">
                Salah satu alasan utama saya untuk ikut bootcamp devscale sebenarnya karena saya pengen nanya banyak hal dengan mas Indra dan mas Indra
                benar-benar sangaaat jauh diluar ekspetasi saya. Banyak banget insight tech even non-tech yang saya dapatkan dan benar-benar membantu untuk
                perkembangan career even personal life haha.
              </h4>
              <div className="flex items-center gap-4">
                <Image
                  src="https://cdn.discordapp.com/avatars/214045849641025538/7cc09abf87a564ba973fbb21d972c411.webp"
                  width={32}
                  height={32}
                  alt="profile"
                  className="rounded-full"
                />
                <p>Asrafil - Mobile Dev</p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-zinc-500 italic">Pengajarnya humble banget dan pengertian. Kalo ada yang bingung dijelasin sampai ngerti 😸</h4>
              <div className="flex items-center gap-4">
                <Image
                  src="https://cdn.discordapp.com/avatars/437089607352451092/a2cf37cec257145166ce6f366b424170.webp"
                  width={32}
                  height={32}
                  alt="profile"
                  className="rounded-full"
                />
                <p>Hisyam Akbar - UI Designer</p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-zinc-500 italic">
                Sangat amat passionate untuk membagi ilmunya, cara berkomunikasi yang baik, penguasaan materi yang gausah diragukan lagi, mentor yang baik
              </h4>
              <div className="flex items-center gap-4">
                <Image
                  src="https://cdn.discordapp.com/avatars/709020146022481920/52f22ebf67cb18f97f66b388e4542877.webp"
                  width={32}
                  height={32}
                  alt="profile"
                  className="rounded-full"
                />
                <p>Rivan - University Student</p>
              </div>
            </div>
          </section>
        </section>
        <section className="space-y-8">
          <h2>Bootcamp Outcomes</h2>
          <div className="w-12 border-b-2 border-primary-500" />
          <div className="space-y-2">
            <h4 className="flex gap-4 items-center">
              <Check className="text-emerald-400" /> Proficient in Web Development
            </h4>
            <h4 className="flex gap-4 items-center">
              <Check className="text-emerald-400" /> Understanding of Fullstack Dev
            </h4>
            <h4 className="flex gap-4 items-center">
              <Check className="text-emerald-400" /> Project Building Experience
            </h4>
            <h4 className="flex gap-4 items-center">
              <Check className="text-emerald-400" /> Career Support and Guidance
            </h4>
            <h4 className="flex gap-4 items-center">
              <Check className="text-emerald-400" /> Familiarity with Developer Tools
            </h4>
            <h4 className="flex gap-4 items-center">
              <Check className="text-emerald-400" /> Networking Opportunities and Positive Communities
            </h4>
          </div>
        </section>
        <section className="space-y-8">
          <h2>Pricing and Benefits</h2>
          <div className="w-12 border-b-2 border-primary-500" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-primary-500 to-rose-700 p-12 rounded-xl space-y-2">
              <h5 className="text-black">Early bird</h5>
              <h1 className="text-7xl text-black">899K</h1>
              <p className="text-black font-bold tracking-tight">
                <span className="line-through ">From 1.999K</span> 55% OFF - 29 Oct 2023{' '}
              </p>
            </div>
            <ul className="text-lg text-white">
              <li className="list-inside list-disc">32 Bootcamp Immersive</li>
              <li className="list-inside list-disc">Sessions 1:1 Session every week </li>
              <li className="list-inside list-disc">Career Advices</li>
              <li className="list-inside list-disc">Access to course platform </li>
              <li className="list-inside list-disc">Progress Reviews</li>
            </ul>
          </div>
        </section>
        <section className="space-y-8">
          <h2>Registration</h2>
          <div className="w-12 border-b-2 border-primary-500" />
          <div className="flex justify-between items-center border-2 bg-background-900/20 space-y-2 hover:border-background-600 border-background-900/40 p-8 rounded-xl transition duration-300 ease-in-out">
            <div className="space-y-1">
              <h4 className="text-white">Pendaftaran Bootcamp disini</h4>
              <p className="text-zinc-400">Pembayaran fee langsung dilakukan setelah melakukan register untuk book seat.</p>
            </div>
            <a href="https://tally.so/r/mDpdyb" target="_blank">
              <button className="bg-gradient-to-br from-primary-500 to-rose-700 px-4 py-2 rounded-lg text-black space-y-2">Register</button>
            </a>
          </div>
        </section>
        <section className="space-y-8">
          <h2>Bootcamp Method</h2>
          <div className="w-12 border-b-2 border-primary-500" />
          <p className="text-xl font-normal">
            <span className="text-white font-medium"> Fullstack Javascript Bootcamp akan dimulai dari Sabtu, 29 Oktober 2023, selama 32 sesi.</span>{' '}
            Pembelajaran dilakukan dengan Immersive, tatap muka secara online Bukan Pre-Recorded. 4x Pertemuan setiap Minggu, dimulai jam 20.00 WIB . Setiap
            pertemuan 2 sesi, 60 menit per sesi. Hari belajar: Sabtu, Minggu, Selasa dan Kamis.
          </p>
        </section>
        <section className="space-y-8">
          <h2>Session 1:1 Opportunity</h2>
          <div className="w-12 border-b-2 border-primary-500" />
          <p className="text-xl font-normal">
            Peserta belajar akan diberikan jadwal agar bisa melakukan session 1:1 private dengan pengajar setiap minggunya, boleh bertanya / mentoring seputar
            kelas, karir, pekerjaan, atau apapun.
          </p>
          <Image src="/Session.png" width={1200} height={600} alt="Session" className="rounded-lg" />
        </section>
        <section className="space-y-8">
          <h2>Devscale Learning Platform</h2>
          <div className="w-12 border-b-2 border-primary-500" />
          <p className="text-xl font-normal">
            Peserta akan diberikan akses lifetime kepada devscale learning platform sebagai pembelajaran selain di kelas untuk menambah pengetahuan tentang
            code. Saat ini masih dalam versi Beta, dan akan ditambahkan konten setiap minggunya.
          </p>
          <Image src="/assets/devscale.png" width={1200} height={600} alt="devscale learning" className="rounded-xl" />
        </section>
        <section className="space-y-8">
          <h2>Frequently Asked Question</h2>
          <div className="w-12 border-b-2 border-primary-500" />
          <div className="space-y-2">
            <h4>Apakah program ini cocok untuk saya?</h4>
            <p className="text-xl font-normal">
              Tergantung apa yang ingin anda capai, jika anda ingin mencari mentor sebagai accelerator untuk mempercepat belajar koding dan bercita-cita sebagai
              seorang developer, maka program ini cocok untuk anda.
            </p>
          </div>

          <div className="space-y-2">
            <h4>Bagaimana pace dari program ini?</h4>
            <p className="text-xl font-normal">
              Program ini menggunakan fast-track pace, artinya kita hanya belajar hal-hal yang practical saja dengan metode yang cepat, adapun fundamental
              wawasan bisa kamu pelajari dari devscale platform.
            </p>
          </div>

          <div className="space-y-2">
            <h4>Apakah program ini dibantu cari kerja?</h4>
            <p className="text-xl font-normal">
              Tidak, kami tidak membantu anda untuk mendapatkan kerja. Tapi kami fokus pada membekali peserta untuk membangun skillset dan portfolionya.
            </p>
          </div>

          <div className="space-y-2">
            <h4>Saya masih mahasiswa apa bisa ikut?</h4>
            <p className="text-xl font-normal">
              Tentu! selagi mau konsisten belajar dan mau bekerja keras untuk mengikuti pelajarannya kamu akan dapat impact yang besar.
            </p>
          </div>

          <div className="space-y-2">
            <h4>Apakah harus punya pengalaman coding untuk ikut bootcamp ini?</h4>
            <p className="text-xl font-normal">
              Tentu! selagi mau konsisten belajar dan mau bekerja keras untuk mengikuti pelajarannya kamu akan dapat impact yang besar.
            </p>
          </div>

          <div className="space-y-2">
            <h4>Apa 8 minggu bisa bener-bener jadi Fullstack ?</h4>
            <p className="text-xl font-normal">
              Fullstack Developer adalah titik yang membutuhkan waktu yang sangat panjang dan konsisten dalam belajar yang tentu tidak mungkin dicapai dalam 8
              minggu. Namun dalam 8 minggu ini kamu akan mendapatkan bekal untuk mencapai titik itu dimasa yang akan datang.
            </p>
          </div>
        </section>
      </main>
      <div className="fixed bottom-2 -right-6 bg-emerald-100 hover:bg-emerald-400 text-emerald-900 cursor-pointer font-bold tracking-tight p-4 rounded-xl transition duration-300 ease-in-out scale-75">
        <a href="https://api.whatsapp.com/send/?phone=62881082447028&text&type=phone_number&app_absent=0" className="flex gap-2 items-center">
          <MessageSquare /> Ada pertanyaan ? Whatsapp disini
        </a>
      </div>
    </>
  );
}
