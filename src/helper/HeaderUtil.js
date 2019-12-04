let headers_ = new Headers
headers_.set('Accept','application/json')
headers_.set('Content-Type','application/json')
headers_.set('Authorization', sessionStorage.getItem('cr'))
export function getHeaders() {
  return headers_;
}