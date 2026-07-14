export default function AdminArticles() {
  return (
    <div className="container">
      <h1>إدارة المقالات</h1>

      <div className="card">
        <button className="btn">+ مقال جديد</button>

        <table style={{ width: "100%", marginTop: "20px" }}>
          <thead>
            <tr>
              <th>العنوان</th>
              <th>التصنيف</th>
              <th>المشاهدات</th>
              <th>الحالة</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>لا توجد مقالات حتى الآن</td>
              <td>-</td>
              <td>0</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
