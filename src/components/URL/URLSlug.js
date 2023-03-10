export const URLSlug = [
  {
    id: 1,
    title: "Chọn kính",
    to: "/my-project/choose-glasses",
    img: "./ProjectImages/Choose-glasses.png",
    href: "#",
    desc: `Áp dụng props để truyền dữ liệu giữa các component. Sử dụng CSS module để style giao diện`,
  },
  {
    id: 2,
    title: "Shop bán giày",
    to: "/my-project/shoe-shop",
    img: "./ProjectImages/shoe-shop.png",
    href: "#",
    desc: "Đang cập nhật",
  },
  {
    id: 3,
    title: "Đặt vé xem phim",
    to: "/my-project/movie-seat-selection",
    img: "./ProjectImages/choose-seats-movie.png",
    href: "https://github.com/henrylenguyen/reactjs-BaiTap-bc38/tree/master/src/layouts/MovieSeats",
    desc: "Nhấn một lần vào ghế ngồi sẽ chọn ghế đó, nhấn thêm lần nữa sẽ hủy chọn. Ngoài ra có thể hủy chọn ghế tại màn hình thông tin đặt vé. Có thống kê tổng số tiền vé",
    use: "Sử dụng tailwind CSS để làm giao diện. Quản lý state bằng redux toolkit. Component sử dụng function, lấy dữ liệu bằng useSelector và dispatch action bằng useDispatch",
  },
  {
    id: 3,
    title: "Quản lý sinh viên",
    to: "/my-project/student-management",
    img: "./ProjectImages/QLSV.png",
    href: "https://github.com/henrylenguyen/reactjs-BaiTap-bc38/tree/master/src/layouts/QLSV",
    desc: "Có validate đầy đủ, khi người dùng chưa nhập gì hoặc nhập không hợp lệ sẽ không thể bấm nút thêm sinh viên. Người dùng có thể sửa thông tin của sinh viên và có thể xóa và tìm sinh viên. Dữ liệu chủ yếu là dữ liệu tỉnh (vẫn còn bug)",
    use: 'Giao diện làm bằng tailwind CSS. Sử dụng class Component là chủ yếu. Áp dụng life cycle "componentDidUpdate" để đưa dữ liệu lên ô nhập liệu. Sử dụng connect của "react-redux" để lấy dữ liệu và dispatch action thông qua mapStateToProps và mapDispatchToProps',
  },
  {
    id: 4,
    title: "Quản lý sinh viên API",
    to: "/my-project/student-management-version-2",
    img: "./ProjectImages/QLSV.png",
    href: "#",
    desc: 'Phiên bản nâng cấp của Quản lý sinh viên. Code ngắn gọn tối ưu hơn và không còn những bug ở phiên bản cũ, Dữ liệu được lấy và cập nhật thông qua API. Có loading skeleton để người dùng biết được dữ liệu đang load ở bảng sinh viên. Khi thêm sinh viên cũng hiển thị loading ngay nút bấm. Ngoài ra cập nhật nút hủy khi bấm "cập nhật"',
    use: "Quản lý state bằng redux toolkit, API bằng redux saga. Quản lý form bằng react-hook-form và validate với YUP"
  },
];
