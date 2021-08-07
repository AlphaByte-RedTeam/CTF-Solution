from flask_cors import CORS, cross_origin
from flask import send_file, request, abort
from flask import Flask, Response
from weasyprint import HTML

import io
import os

app = Flask(__name__)
cors = CORS(app)

@app.route('/publish', methods=['POST'])
@cross_origin()
def publish():
    data = request.json

    if data:
      content = data.get('body')
      html = HTML(string=content)
      pdf = html.write_pdf()

      return send_file(
          io.BytesIO(pdf)
        , mimetype='application/pdf'
      )
    else:
      abort(404)
