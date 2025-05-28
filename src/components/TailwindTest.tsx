export default function TailwindTest() {
  return (
    <div className="p-6 bg-blue-50 rounded-lg mb-8">
      <h1 className="text-blue font-bold mb-4">Custom CSS Test</h1>
      <p className="text-gray mb-4">If you can see this styled with blue heading and gray text, our custom CSS is working!</p>
      <div className="grid grid-cols-3">
        <div className="p-4 rounded-lg" style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}>Blue Box</div>
        <div className="p-4 rounded-lg" style={{ backgroundColor: '#fef3c7', color: '#92400e' }}>Amber Box</div>
        <div className="p-4 rounded-lg" style={{ backgroundColor: '#d1fae5', color: '#065f46' }}>Green Box</div>
      </div>
    </div>
  );
}