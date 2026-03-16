# Kế hoạch học tập 3D Web (Three.js, React Three Fiber, GSAP)

Dưới đây là lộ trình học tập được chia thành 5 giai đoạn, từ cơ bản đến nâng cao.

## 🧭 Giai đoạn 1 (3–5 ngày) — Hiểu Three.js Core

**Mục tiêu:** Hiểu core của 3D scene (Môi trường 3D độc lập).

**Các khái niệm cần nắm rõ (5 khái niệm cốt lõi):**
1. **Scene:** Không gian chứa mọi vật thể 3D.
2. **Camera:** Góc nhìn, con mắt của người dùng trong thế giới 3D.
3. **Renderer:** Trình kết xuất (Vẽ cảnh 3D ra thẻ `<canvas>` trong HTML).
4. **Mesh:** Vật thể 3D (bao gồm Geometry - hình khối, và Material - vật liệu/màu sắc bề mặt).
5. **Light:** Ánh sáng (có ánh sáng thì vật thể mới hiển thị đúng khối và chất liệu).

**Project thực hành:** 👉 Khối lập phương (Cube) xoay.
1. Khởi tạo `scene`, `camera`, `renderer`.
2. Tạo MESH (Cube) từ `BoxGeometry` và `MeshStandardMaterial`.
3. Thêm ánh sáng (AmbientLight, DirectionalLight).
4. Tạo Animation Loop để làm cube xoay (`requestAnimationFrame`).

*Bài tập thêm:* Thay Cube bằng Sphere (Khối cầu) hoặc Torus (Khối vòng), thử đổi màu sắc vật liệu tĩnh sang có hiệu ứng phản quang.
**Kết quả thu được:** Nắm bắt luồng chạy thực tế của một 3D scene.

## 🧭 Giai đoạn 2 (3–5 ngày) — Model + Lighting

**Mục tiêu:** Tải và hiển thị model 3D thật lên Web.

**Các khái niệm và công cụ cần học:**
- **GLTFLoader:** Công cụ dùng để load định dạng `.glb` / `.gltf` (Tiêu chuẩn của Web3D).
- **Environment Map (HDRI):** Hình ảnh môi trường bao quanh để tính toán ánh sáng và phản xạ chân thực hơn.
- **Shadow (Bóng đổ):** Cách bật bóng cho Đèn (đổ bóng) và Vật thể (nhận bóng/tạo bóng).
- **Material nâng cao:** Tương tác kĩ hơn với thuộc tính `roughness` (độ nhám) và `metalness` (độ kim loại).

**Project thực hành:** 👉 3D Product Viewer (Trình xem sản phẩm 3D).
- Ví dụ: Sneaker, điện thoại, hoặc laptop (có thể xoay để xem các góc).
- *Nguồn lấy model miễn phí:* Sketchfab, PolyPizza.

## 🧭 Giai đoạn 3 (1 tuần) — Animation với GSAP

**Mục tiêu:** Tạo nên những hiệu ứng mượt mà và chuyển động đỉnh cao cho Website.

**Những thứ cần học:**
- **Timeline:** Điều phối nhiều animation chạy nối tiếp/song song.
- **Easing:** Gia tốc của chuyển động (nhanh dần, chậm dần, nảy, cao su...) để mang lại cảm giác "tự nhiên".
- **Scroll Animation:** Chuyển động dựa vào thanh cuộn của trình duyệt (dùng `ScrollTrigger` của GSAP).

**Project thực hành:** 👉 Scroll Landing Page (Landing page kết hợp cuộn màn hình).
- Luồng: Cuộn chuột ↓ Sinh vật/Sản phẩm bay ra ↓ Camera zoom tới gần ↓ Chữ (Text HTML) hiện ra.
*(Đây là công thức tạo ra 80% website 3D ấn tượng hiện nay)*.

## 🧭 Giai đoạn 4 (1 tuần) — Interaction (Tương tác)

**Mục tiêu:** Cho phép người dùng trực tiếp "nhấn, trỏ" vào vật thể 3D.

**Học các kỹ thuật:**
- **Raycasting:** Bắn tia từ chuột vào không gian 3D để xác định người dùng đang trỏ vào Mesh nào.
- **Mouse interaction:** Bắt sự kiện chuột trong hệ tọa độ 3D.
- **Hover object:** Hiệu ứng di chuột lên vật thể 3D.

**Project thực hành:** 👉 Interactive Scene (Khung cảnh có tính tương tác cao).
- Hover chuột vào thì vật thể phát sáng/thay đổi màu.
- Click chuột thì kích hoạt một animation (VD: Mở nắp laptop).
- Camera nhẹ nhàng lia theo hướng di chuyển của chuột (Parallax effect).

## 🧭 Giai đoạn 5 (1–2 tuần) — Chuyển qua React Ecosystem

**Mục tiêu:** Áp dụng vào React bằng **React Three Fiber (R3F)** để code clean, dễ bảo trì, dễ Scale (tích hợp chặt chẽ vào Next.js).

**Lý do dùng R3F:** 
- Biến mọi thứ của Three.js thành dạng React Component (`<mesh>`, `<ambientLight>`, v.v...).
- Tích hợp trực tiếp với UI React bằng Three Drei (Hệ sinh thái helpers có sẵn).
- Code cực kì ngắn gọn và dễ quản lý state.

**Stack đầy đủ lúc này:**
`Next.js` + `React Three Fiber` + `Three.js` + `GSAP` + `Blender` (để tối ưu Model).
