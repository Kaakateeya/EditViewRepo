angular.module('KaakateeyaEdit').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('editview/app/views/contacttemplate.html',
    "<div id=\"ownerdiv4\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <li id=\"divfathernumbersowner\" class=\"clearfix form-group\">\r" +
    "\n" +
    "        <label for=\"lblContactNumbersfather\" class=\"pop_label_left\">Contact Numbers</label>\r" +
    "\n" +
    "        <div class=\"pop_controls_right\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <a data-toggle=\"tooltip\" style=\"padding-right:20%;\" data-original-title=\"Add Mobile Number\" tabindex=\"6\" ng-click=\"showhidemob($event,'mob');\" href=javascript:void(0);>\r" +
    "\n" +
    "                <!--<span class=\"glyphicon glyphicon-phone\"></span>-->\r" +
    "\n" +
    "                <ng-md-icon icon=\"smartphone\" style=\"fill:#337ab7\" size=\"20\"></ng-md-icon>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <a data-toggle=\"tooltip\" style=\"padding-right:20%;\" data-original-title=\"Add  Land Number\" tabindex=\"7\" ng-click=\"showhidemob($event,'land');\" href=javascript:void(0);>\r" +
    "\n" +
    "                <!--<span class=\"glyphicon glyphicon-phone-alt\"></span>-->\r" +
    "\n" +
    "                <ng-md-icon icon=\"call\" style=\"fill:#337ab7\" size=\"20\"></ng-md-icon>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <a data-toggle=\"tooltip\" ng-show=\"emailhide\" data-original-title=\"Add  Email ID\" tabindex=\"8\" ng-click=\"showhidemob($event,'mail');\" href=javascript:void(0);>\r" +
    "\n" +
    "                <!--<span class=\"glyphicon glyphicon-envelope\"></span>-->\r" +
    "\n" +
    "                <ng-md-icon icon=\"mail\" style=\"fill:#337ab7\" size=\"20\"></ng-md-icon>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <li class=\"clearfix form-group\" ng-show=\"pmob\">\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <label for=\"lblMobile\" class=\"pop_label_left\">Mobile #  </label>\r" +
    "\n" +
    "            <div class=\"pop_controls_right select-box-my select-box-my-double\">\r" +
    "\n" +
    "                <select multiselectdropdown ng-model=\"dmobile\" ng-options=\"item.value as item.label for item in countryCodeArr\"></select>\r" +
    "\n" +
    "                <input type=text ng-model=\"strmobile\" style=\"float:right;\" class=\"form-control\" maxlength=\"10\" tabindex=\"10\" />\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li class=\"clearfix form-group\" ng-show=\"amob\">\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <label for=\"lblMobilefather\" class=\"pop_label_left\">Altenate Number</label>\r" +
    "\n" +
    "            <div class=\"pop_controls_right select-box-my select-box-my-double\">\r" +
    "\n" +
    "                <select multiselectdropdown ng-model=\"dalternative\" ng-options=\"item.value as item.label for item in countryCodeArr\"></select>\r" +
    "\n" +
    "                <input type=text class=\"form-control\" style=\"float:right;\" ng-model=\"stralternative\" maxlength=\"10\" tabindex=\"12\" />\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li class=\"clearfix form-group\" ng-show=\"land\">\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <label for=\"lblLandLine\" class=\"pop_label_left\">Land line #  </label>\r" +
    "\n" +
    "            <div class=\"pop_controls_right select-box-my select-box-my-trible\">\r" +
    "\n" +
    "                <select multiselectdropdown ng-model=\"dland\" ng-options=\"item.value as item.label for item in countryCodeArr\"></select>\r" +
    "\n" +
    "                <input type=text ng-model=\"strareacode\" maxlength=\"4\" tabindex=\"14\" />\r" +
    "\n" +
    "                <input type=text ng-model=\"strland\" maxlength=\"8\" tabindex=\"15\" />\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li class=\"clearfix form-group\" ng-show=\"mail\">\r" +
    "\n" +
    "        <label for=\"lblEmail\" class=\"pop_label_left\">Email  </label>\r" +
    "\n" +
    "        <div class=\"pop_controls_right\">\r" +
    "\n" +
    "            <input type=text ng-model=\"strmail\" class=\"form-control\" placeholder=\"Enter Email\" text=\" \" tabindex=\"16\" />\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('editview/app/views/countryTemplate.html',
    "<div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <li class=\"clearfix form-group\" ng-show=\"countryshow\">\r" +
    "\n" +
    "        <label for=\"lblCountry\" class=\"pop_label_left\">Country<span ng-if=\"require==true\" style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "        <div class=\"pop_controls_right select-box-my input-group\">\r" +
    "\n" +
    "            <select multiselectdropdown ng-model=\"dcountry\" ng-change=\"changeBind('Country',dcountry);\" ng-options=\"item1.value as item1.label for item1 in countryArr\" ng-required=\"require\"></select>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "        <label for=\"State\" class=\"pop_label_left\">State<span ng-if=\"require==true\" style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "        <div class=\"pop_controls_right select-box-my input-group\">\r" +
    "\n" +
    "            <select multiselectdropdown ng-model=\"dstate\" ng-options=\"item.value as item.label for item in stateArr\" ng-change=\"changeBind('State',dstate,dcountry);\" ng-required=\"require\"></select>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "        <div id=\"divEduDistric\">\r" +
    "\n" +
    "            <label for=\"lblDistrict\" class=\"pop_label_left\">District<span ng-if=\"require==true\" style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "            <div class=\"pop_controls_right select-box-my input-group\">\r" +
    "\n" +
    "                <select multiselectdropdown ng-model=\"ddistrict\" ng-options=\"item1.value as item1.label for item1 in districtArr\" ng-change=\"changeBind('District',ddistrict);\" ng-required=\"(dcountry===1 || dcountry==='1')?require:false\"></select>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li class=\"clearfix form-group\" ng-show=\"cityshow\">\r" +
    "\n" +
    "        <label for=\"lblCityworking\" class=\"pop_label_left\">City<span ng-if=\"require==true\" style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"pop_controls_right select-box-my input-group\">\r" +
    "\n" +
    "            <div ng-show=\"!cityinput\">\r" +
    "\n" +
    "                <select multiselectdropdown ng-model=\"dcity\" ng-options=\"item.value as item.label for item in cityeArr\" ng-required=\"cityshow==true?require:false\"></select>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-show=\"othercity\">\r" +
    "\n" +
    "                <input ng-model=\"strothercity\" ng-show=\"cityinput\" class=\"form-control\" maxlength=\"100\" />\r" +
    "\n" +
    "                <a id=\"lnkCity\" href=\"javascript:void(0);\" ng-click=\"ShowCity();\">Not in List</a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('editview/app/views/editAstroDetails.html',
    "<div class=\"edit_pages_content_main clearfix\">\r" +
    "\n" +
    "    <div id=\"divlnkasro\" class=\"edit_page_item\">\r" +
    "\n" +
    "        <div class=\"edit_page_item_head clearfix\">\r" +
    "\n" +
    "            <h4>Astro Details </h4>\r" +
    "\n" +
    "            <div class=\"edit_page_item_ui clearfix\">\r" +
    "\n" +
    "                <div ng-if=\"AstroArr.length==0\" cssclass=\"edit_page_add_button\">\r" +
    "\n" +
    "                    <a ng-click=\"populateAstro();\" class=\"edit_page_add_button\" href=\"javascript:void(0);\">Add</a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"edit_page_details_item\">\r" +
    "\n" +
    "            <div id=\"reviewdiv\" ng-class=\"item.reviewstatus===false?'edit_page_details_item_desc clearfix reviewCls':'edit_page_details_item_desc clearfix'\" ng-repeat=\"item in AstroArr track by $index\">\r" +
    "\n" +
    "                <div>\r" +
    "\n" +
    "                    <div ng-hide=\"item.TimeOfBirth===null\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <span id=\"TimeofBirth\" style=\"font-weight:bold;\">Time of Birth</span></h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblTimeofBirth\">{{item.TimeOfBirth}}</span></h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <span id=\"PlaceofBirth\" style=\"font-weight:bold;\">Place of Birth</span></h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblPlaceofBirth\">{{ item.CityOfBirth +\",\"+item.DistrictOfBirth+\",\"+item.StateOfBirth+\",\"+item.CountryOfBirth}}</span>\r" +
    "\n" +
    "                        </h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div ng-hide=\"item.TypeofStar===null\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <span id=\"Telugustar\" style=\"font-weight:bold;\">Star Language</span></h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblTelugustar\">{{ item.TypeofStar+((item.StarName!=\"\" &&  item.StarName!=null)?\" - \"+\r" +
    "\n" +
    "                                            item.StarName:\"\")+((item.Paadam!=\"\" &&  item.Paadam!=null)?\" (\"+item.Paadam+\")\":\"\") }}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div ng-hide=\"item.Rassi===null\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <span id=\"raasimoonsign\" style=\"font-weight:bold;\">Raasi/moon sign</span></h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblraasimoonsign\">{{ item.Rassi}}</span></h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div ng-hide=\"item.Lagnam===null\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <span id=\"Lagnam\" style=\"font-weight:bold;\">Lagnam</span></h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblLagnam\">  {{ item.Lagnam }}</span></h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div ng-hide=\"item.Gothram===null\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <span id=\"GothramGotra\" style=\"font-weight:bold;\">Gothram/Gotra</span></h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblGothramGotra\">  {{ item.Gothram}}</span></h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div ng-hide=\"item.MeternalGothramID===null\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <span id=\"MaternalGothram\" style=\"font-weight:bold;\">Maternal Gothram</span></h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblMaternalGothram\">{{ item.MeternalGothramID }}</span></h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div ng-hide=\"item.manglikkujadosham===null\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <span id=\"manglikkujadosham\" style=\"font-weight:bold;\">manglik/kuja dosham</span></h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblmanglikkujadosham\">{{ item.manglikkujadosham }}</span></h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"edit_page_item_ui clearfix\" ng-if=\"AstroArr.length>0\">\r" +
    "\n" +
    "                    <a ng-click=\"populateAstro(item);\" class=\"edit_page_edit_button\" href=\"javascript:void(0);\">Edit</a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <br>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"edit_page_details_item_desc clearfix\" style=\"padding: 0 0 0 20px;\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"radio-group-my input-group\" ng-show=\"ImageUrl==='' || ImageUrl===null\">\r" +
    "\n" +
    "            <!--<label><input ng-model=\"atroObj.rdlUploadGenerate\" value=\"0\" type=\"radio\"><span>&nbsp;Upload Horoscope</span> </label>\r" +
    "\n" +
    "            <label class=\"\"><input ng-model=\"atroObj.rdlUploadGenerate\" value=\"1\" type=\"radio\"><span>&nbsp;Generate Horoscope</span></label>-->\r" +
    "\n" +
    "            <md-radio-group ng-required=\"true\" name=\"rdlUploadGenerate\" layout=\"row\" ng-model=\"atroObj.rdlUploadGenerate\" ng-change=\"uploadGenerateHoro(atroObj.rdlUploadGenerate);\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                <md-radio-button value=\"0\">Upload Horoscope</md-radio-button>\r" +
    "\n" +
    "                <md-radio-button value=\"1\"> Generate Horoscope </md-radio-button>\r" +
    "\n" +
    "            </md-radio-group>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div ng-hide=\"ImageUrl==='' || ImageUrl===null\">\r" +
    "\n" +
    "        <div class=\"edit_page_details_item\">\r" +
    "\n" +
    "            <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                <img ng-model=\"imghoroName\" ng-src=\"{{ImageUrl}}\" Style=\"width: 250px; height: 250px;\" />\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"edit_page_details_item_desc clearfix\" style=\"padding: 0 0 0 20px;\">\r" +
    "\n" +
    "            <div class=\"edit_page_item_ui clearfix  pull-left\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <a ID=\"btndeletehoro\" class=\"edit_page_del_button\" href=\"javascript:void(0);\" ng-click=\"shoedeletePopup();\" data-placement=\"bottom\" data-toggle=\"tooltip\" data-original-title=\"Delete Astro Details\">\r" +
    "\n" +
    "               Delete <ng-md-icon icon=\"delete\" style=\"fill:#665454\" size=\"18\">Delete</ng-md-icon></a>\r" +
    "\n" +
    "                <a Style=\"padding-left: 100px;\" class=\"btn btn-link\" ng-click=\"vewHoro();\">View<span class=\"glyphicon glyphicon-eye-open\"></span></a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"astroContent.html\">\r" +
    "\n" +
    "    <form name=\"astroForm\" novalidate role=\"form\" ng-submit=\"astroSubmit(atroObj);\" accessible-form>\r" +
    "\n" +
    "        <div class=\"modal-header\">\r" +
    "\n" +
    "            <h3 class=\"modal-title text-center\" id=\"modal-title\">Astro details\r" +
    "\n" +
    "                <a href=\"javascript:void(0);\" ng-click=\"cancel();\">\r" +
    "\n" +
    "                    <ng-md-icon icon=\"close\" style=\"fill:#c73e5f\" class=\"pull-right\" size=\"20\"></ng-md-icon>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-body clearfix pop_content_my\" id=\"modal-body\">\r" +
    "\n" +
    "            <ul id=\"ulastro\">\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lbltimebirth\" class=\"pop_label_left\">Time of Birth<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my select-box-my-trible select-box-my-trible3 input-group\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <select multiselectdropdown ng-model=\"atroObj.ddlFromHours\" ng-options=\"item.value as item.label for item in hrsbindArr\" required></select>\r" +
    "\n" +
    "                        <select multiselectdropdown ng-model=\"atroObj.ddlFromMinutes\" ng-options=\"item.value as item.label for item in minbindArr\" required></select>\r" +
    "\n" +
    "                        <select multiselectdropdown ng-model=\"atroObj.ddlFromSeconds\" ng-options=\"item.value as item.label for item in secbindArr\" required></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <country-directive require=\"true\" countryshow=\"true\" cityshow=\"true\" othercity=\"false\" dcountry=\"atroObj.ddlCountryOfBirthID\" dstate=\"atroObj.ddlStateOfBirthID\" ddistrict=\"atroObj.ddlDistrictOfBirthID\" dcity=\"atroObj.ddlcity\"></country-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblstarlan\" class=\"pop_label_left\">Star language</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <select multiselectdropdown ng-model=\"atroObj.ddlstarlanguage\" typeofdata=\"starLanguage\" ng-change=\"changeBind('star',atroObj.ddlstarlanguage);\"></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblstar\" class=\"pop_label_left\">Star</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <select multiselectdropdown ng-model=\"atroObj.ddlstar\" ng-options=\"item.value as item.label for item in starArr\"></select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblpaadam\" class=\"pop_label_left\">Paadam</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <select multiselectdropdown ng-model=\"atroObj.ddlpaadam\" typeofdata=\"paadam\"></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblLagnam\" class=\"pop_label_left\">Lagnam</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <select multiselectdropdown ng-model=\"atroObj.ddlLagnam\" typeofdata=\"lagnam\"></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblRaasiMoonsign\" class=\"pop_label_left\">Raasi/Moon sign</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <select multiselectdropdown ng-model=\"atroObj.ddlRaasiMoonsign\" typeofdata=\"ZodaicSign\"></select>\r" +
    "\n" +
    "                        </select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblGothramGotra\" class=\"pop_label_left\">Gothram/Gotra</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <input ng-model=\"atroObj.txtGothramGotra\" class=\"form-control\" tabindex=\"13\" maxlength=\"100\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix\">\r" +
    "\n" +
    "                    <label for=\"lblMaternalgothram\" class=\"pop_label_left\">Maternal gothram</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <input ng-model=\"atroObj.txtMaternalgothram\" class=\"form-control\" tabindex=\"14\" maxlength=\"100\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix\">\r" +
    "\n" +
    "                    <label for=\"lblManglikKujadosham\" style=\"padding-top: 2%;\" class=\"pop_label_left\">Manglik/Kuja dosham</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <md-input-container style=\"font-weight: 700;color:black;\">\r" +
    "\n" +
    "                        <md-radio-group name=\"rdlkujaDosham\" layout=\"row\" ng-model=\"atroObj.rdlkujaDosham\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                            <md-radio-button value=\"0\" class=\"md-primary\">Yes</md-radio-button>\r" +
    "\n" +
    "                            <md-radio-button value=\"1\"> No </md-radio-button>\r" +
    "\n" +
    "                            <md-radio-button value=\"2\"> Dont't Know </md-radio-button>\r" +
    "\n" +
    "                        </md-radio-group>\r" +
    "\n" +
    "                    </md-input-container>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li class=\"clearfix form-group\" style=\"display: none;\">\r" +
    "\n" +
    "                    <label for=\"lbllongitude\" class=\"pop_label_left\">Place of birth longitude</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <input id=\"txtlogitude\" class=\"form-control\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <select multiselectdropdown ng-model=\"atroObj.ddllongitude\"></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\" style=\"display: none;\">\r" +
    "\n" +
    "                    <label for=\"lbllatitude\" class=\"pop_label_left\">Place of birth latitude</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <input id=\"txtlatitude\" class=\"form-control col-lg-3\" />\r" +
    "\n" +
    "                        <select multiselectdropdown ng-model=\"atroObj.ddllatitude\"></select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\" style=\"display: none;\">\r" +
    "\n" +
    "                    <label for=\"lbllatitude\">Place of birth latitude</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <input type=\"checkbox\" ng-model=\"atroObj.Chkgenertehoro\" value=\"Generate HoroScope\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"row\">\r" +
    "\n" +
    "                    <edit-footer></edit-footer>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"AddHoroPopup.html\">\r" +
    "\n" +
    "    <form name=\"uploadForm\" novalidate role=\"form\" ng-submit=\"upload(up);\">\r" +
    "\n" +
    "        <div class=\"modal-header\">\r" +
    "\n" +
    "            <h3 class=\"modal-title text-center\" id=\"modal-title\">Upload Horoscope </h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "            <label class=\"<control></control>-label\">Use this file formats like gif, jpeg, png,jpg</label>\r" +
    "\n" +
    "            <br>\r" +
    "\n" +
    "            <ul id=\"ulprofession\">\r" +
    "\n" +
    "                <input type=\"file\" file-model=\"up.myFile\" />\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-footer\">\r" +
    "\n" +
    "            <input value=\"Cancel\" class=\"button_custom button_custom_reset\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "            <input value=\"Upload\" class=\"button_custom\" type=\"submit\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"deletehoroPopup.html\">\r" +
    "\n" +
    "    <form name=\"uploadForm\" novalidate role=\"form\" ng-submit=\"deleteHoroImage();\">\r" +
    "\n" +
    "        <div class=\"modal-header\">\r" +
    "\n" +
    "            <h3 class=\"modal-title text-center\" id=\"modal-title\">Delete Horoscope </h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "            <div class=\"text-center\">Are you sure to delete horoscope?</div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-footer\">\r" +
    "\n" +
    "            <input value=\"Close\" class=\"button_custom button_custom_reset\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "            <input value=\"Delete\" class=\"button_custom\" type=\"submit\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"AstroCityPopup.html\">\r" +
    "\n" +
    "    <div class=\"modal-header alert alert-danger\" id=\"div2\">\r" +
    "\n" +
    "        <button type=\"button\" class=\"close\" ng-click=\"cancel();\">&times;</button>\r" +
    "\n" +
    "        <h4 class=\"modal-title\">\r" +
    "\n" +
    "            <span id=\"lblcityheader\">we are unable to genearte horoscope with your given city <b style=\"color: green\"> Administrative Buildings </b>,so please select Nearest city to your place of birth</span>\r" +
    "\n" +
    "        </h4>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"modal-body\" id=\"modalbodyIDnew\">\r" +
    "\n" +
    "        <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "            <select multiselectdropdown ng-model=\"ddlAstrocity\" ng-options=\"item.value as item.label for item in AstrocityArr\" ng-change=\"AstroCityChange(ddlAstrocity);\"></select>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"modal-footer\">\r" +
    "\n" +
    "        <button type=\"button\" class=\"btn btn-default\" ng-click=\"cancel();\">Close</button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"AstroimagePopup.html\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"modal-header\">\r" +
    "\n" +
    "        <h3 class=\"modal-title text-center\" id=\"modal-title\">Horoscope\r" +
    "\n" +
    "            <a href=\"javascript:void(0);\" ng-click=\"cancel();\">\r" +
    "\n" +
    "                <ng-md-icon icon=\"close\" style=\"fill:#c73e5f\" class=\"pull-right\" size=\"25\"></ng-md-icon>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </h3>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"modal-body clearfix pop_content_my\" id=\"modal-body\">\r" +
    "\n" +
    "        <img ng-src=\"{{ImageUrl}}\" style=\"width:500px;height:500px;\" />\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"modal-footer\">\r" +
    "\n" +
    "        <div class=\"pull-right\">\r" +
    "\n" +
    "            <input value=\"Cancel\" class=\"button_custom button_custom_reset  pull-right\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<alert-directive></alert-directive>"
  );


  $templateCache.put('editview/app/views/editManagePhoto.html',
    "<div class=\"edit_pages_content_main clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"register_page_main\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"my_photos_main my_photos_main_edit\">\r" +
    "\n" +
    "            <h6>Upload your recent Photos for better response</h6>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"clear\">&nbsp;</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <br />\r" +
    "\n" +
    "            <div class=\"dragzone\">\r" +
    "\n" +
    "                <div class=\"pics_selected_list_main clearfix\">\r" +
    "\n" +
    "                    <div class=\"pics_selected_list_main_lt clearfix\">\r" +
    "\n" +
    "                        <p class=\"clearfix\"><span>Upload your three different photos</span></p>\r" +
    "\n" +
    "                        <div id=\"dtimagephoto\" class=\"clearfix\" ng-repeat=\"item in manageArr\" style=\"width:33%;float:left;\">\r" +
    "\n" +
    "                            <div class=\"photos\">\r" +
    "\n" +
    "                                <div class=\"pics_selected_list_item clearfix\">\r" +
    "\n" +
    "                                    <div ng-class=\"item.IsActive == 0 && item.PhotoName !== null?'cssMaskdiv clearfix':''\">\r" +
    "\n" +
    "                                        <img ng-model=\"imgPhotoName\" ng-src=\"{{item.ImageUrl}}\" />\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <div class=\"pics_selected_list_item_ui clearfix\">\r" +
    "\n" +
    "                                        <div class=\"photos_icon\">\r" +
    "\n" +
    "                                            <!--<input type=\"image\" id=\"imgAdd\" alt=\"add\" ng-click=\"AddImage($index+1,item.Cust_Photos_ID,item.DisplayOrder,item.IsActive);\" ng-show=\"{{item.addButtonvisible}}\" />-->\r" +
    "\n" +
    "                                            <a href=\"javascript:void(0);\" ng-click=\"AddImage($index+1,item.Cust_Photos_ID,item.DisplayOrder,item.IsActive);\" ng-show=\"{{item.addButtonvisible}}\">\r" +
    "\n" +
    "                                                <ng-md-icon icon=\"add_a_photo\" style=\"fill:#665454\" size=\"25\">Add</ng-md-icon>\r" +
    "\n" +
    "                                            </a>\r" +
    "\n" +
    "                                            <a href=\"javascript:void(0);\" ng-show=\"{{item.IsMain==1?false:(item.PhotoName!=null?true:false)}}\" ng-click=\"DeleteImage(item.keyname,item.Cust_Photos_ID);\">\r" +
    "\n" +
    "                                                <ng-md-icon icon=\"delete\" style=\"fill:#665454\" size=\"25\">Delete</ng-md-icon>\r" +
    "\n" +
    "                                            </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "                                            <a href=\"javascript:void(0);\" class=\"set_pic\" ng-click=\"setAsProfilePic(item.Cust_Photos_ID);\" style=\"color:#665454;font-weight:bold;\" ng-show='{{item.IsMain==\"1\"?false:(item.PhotoName!=null?true:false) }}'>\r" +
    "\n" +
    "                                            Set as Profilepic\r" +
    "\n" +
    "                                            </a>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"clear\"></div>\r" +
    "\n" +
    "                        <div class=\"edit_page_photo_manage_submit\">\r" +
    "\n" +
    "                            <div class=\"edit_page_photo_manage_protect pull-left clearfix\" ng-show=\"{{loginpaidstatus===1}}\">\r" +
    "\n" +
    "                                <label class=\"\">\r" +
    "\n" +
    "                                \r" +
    "\n" +
    "                                <div class=\"radio_my2 clearfix\">\r" +
    "\n" +
    "                                <label style=\"font-size: 14px !important; font-weight: 400;\"> Protect with Password :</label> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "                                <md-radio-group layout=\"row\" ng-model=\"rbtProtectPassword\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\" ng-change=\"setPhotoPassword(rbtProtectPassword);\">\r" +
    "\n" +
    "                                    <md-radio-button value=\"1\" class=\"md-primary\">Yes</md-radio-button>\r" +
    "\n" +
    "                                    <md-radio-button value=\"0\"> No </md-radio-button>\r" +
    "\n" +
    "                                </md-radio-group>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            </label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    </br>\r" +
    "\n" +
    "                    <div class=\"photo_upload_instrctns_list clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <a ID=\"phtoguide\" href=\"javascript:void(0);\" ng-click=\"redirectPage('PhotoGuideLines');\">Photo guidelines\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                        <a ID=\"photofaq\" href=\"javascript:void(0);\" ng-click=\"redirectPage('Faqs');\">Photo faq’s\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                        <a ID=\"photoupload\" href=\"javascript:void(0);\" ng-click=\"redirectPage('uploadTips');\">Photo upload tips\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"my_photos_main_block2 clearfix\">\r" +
    "\n" +
    "            <div class=\"clearfix pics_incorrect_list\">\r" +
    "\n" +
    "                <h3>Such Photos cannot be Uploaded</h3>\r" +
    "\n" +
    "                <table id=\"DataList3\" class=\"clearfix\" style=\"border-collapse: collapse;\" cellspacing=\"0\">\r" +
    "\n" +
    "                    <tbody>\r" +
    "\n" +
    "                        <tr>\r" +
    "\n" +
    "                            <td>\r" +
    "\n" +
    "                                <img id=\"DataList3_ctl00_images\" src=\"src\\images/Side-face.png\">\r" +
    "\n" +
    "                                <p>\r" +
    "\n" +
    "                                    Side Face\r" +
    "\n" +
    "                                </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                            <td>\r" +
    "\n" +
    "                                <img id=\"DataList3_ctl01_images\" src=\"src\\images/Blir.png\">\r" +
    "\n" +
    "                                <p>\r" +
    "\n" +
    "                                    Blur\r" +
    "\n" +
    "                                </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                            <td>\r" +
    "\n" +
    "                                <img id=\"DataList3_ctl02_images\" src=\"src\\images/Group-photos.png\">\r" +
    "\n" +
    "                                <p>\r" +
    "\n" +
    "                                    Group Photo\r" +
    "\n" +
    "                                </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                            <td>\r" +
    "\n" +
    "                                <img id=\"DataList3_ctl03_images\" src=\"src\\images/Water-mark.png\">\r" +
    "\n" +
    "                                <p>\r" +
    "\n" +
    "                                    Watermark\r" +
    "\n" +
    "                                </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                        </tr>\r" +
    "\n" +
    "                    </tbody>\r" +
    "\n" +
    "                </table>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"pics_selected_list_main_rt clearfix pics_correct_list\">\r" +
    "\n" +
    "                <h3>Photos that can be uploaded</h3>\r" +
    "\n" +
    "                <table id=\"DataList2\" class=\"clearfix\" style=\"border-collapse: collapse;\" cellspacing=\"0\">\r" +
    "\n" +
    "                    <tbody>\r" +
    "\n" +
    "                        <tr>\r" +
    "\n" +
    "                            <td>\r" +
    "\n" +
    "                                <img id=\"DataList2_ctl00_images\" src=\"src\\images/Close-up.png\">\r" +
    "\n" +
    "                                <p>\r" +
    "\n" +
    "                                    Close Up\r" +
    "\n" +
    "                                </p>\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                            <td>\r" +
    "\n" +
    "                                <img id=\"DataList2_ctl01_images\" src=\"src\\images/Fulsize.png\">\r" +
    "\n" +
    "                                <p>\r" +
    "\n" +
    "                                    Full Size\r" +
    "\n" +
    "                                </p>\r" +
    "\n" +
    "                            </td>\r" +
    "\n" +
    "                        </tr>\r" +
    "\n" +
    "                    </tbody>\r" +
    "\n" +
    "                </table>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"clear\">&nbsp;</div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"my_photos_main_block3\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>\r" +
    "\n" +
    "                <img src=\"src/images/whatsup.png\" alt=\"Mail\" style=\"width: 50px; height: 40px;\">Whatsup your photos to\r" +
    "\n" +
    "                <span>91-9848535373</span> - Kindly mention your Profile ID and name\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "            <p>\r" +
    "\n" +
    "                <img src=\"src/images/icon_email.png\" alt=\"Mail\">Can also Email your photos to <span>photos@telugumarriages.com</span> - Kindly mention your Profile ID and name\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"AddimagePopup.html\">\r" +
    "\n" +
    "    <form name=\"uploadForm\" novalidate role=\"form\" ng-submit=\"upload(up);\">\r" +
    "\n" +
    "        <div class=\"modal-header\">\r" +
    "\n" +
    "            <h3 class=\"modal-title text-center\" id=\"modal-title\">Upload Photo </h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "            <ul id=\"ulprofession\">\r" +
    "\n" +
    "                <input type=\"file\" file-model=\"up.myFile\" />\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-footer\">\r" +
    "\n" +
    "            <input value=\"Cancel\" class=\"button_custom button_custom_reset\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "            <input value=\"Upload\" class=\"button_custom\" type=\"submit\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"deleteimagePopup.html\">\r" +
    "\n" +
    "    <form name=\"uploadForm\" novalidate role=\"form\" ng-submit=\"Delete(up);\">\r" +
    "\n" +
    "        <div class=\"modal-header\">\r" +
    "\n" +
    "            <h3 class=\"modal-title text-center\" id=\"modal-title\">Delete Photo </h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "            <div class=\"text-center\">Are you sure to delete photo?</div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-footer\">\r" +
    "\n" +
    "            <input value=\"Close\" class=\"button_custom button_custom_reset\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "            <input value=\"Delete\" class=\"button_custom\" type=\"submit\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<alert-directive></alert-directive>\r" +
    "\n" +
    "<style>\r" +
    "\n" +
    "    .cssMaskdiv {\r" +
    "\n" +
    "        position: relative;\r" +
    "\n" +
    "        display: inline-block;\r" +
    "\n" +
    "        overflow: hidden;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .cssMaskdiv:after {\r" +
    "\n" +
    "        background: rgba(0, 0, 0, 0.5) none repeat scroll 0 0;\r" +
    "\n" +
    "        color: #ffffff;\r" +
    "\n" +
    "        content: \"Under Review\";\r" +
    "\n" +
    "        display: block;\r" +
    "\n" +
    "        font-size: 14px;\r" +
    "\n" +
    "        /* height: 100%; */\r" +
    "\n" +
    "        left: 0;\r" +
    "\n" +
    "        padding: 50% 0;\r" +
    "\n" +
    "        position: absolute;\r" +
    "\n" +
    "        text-align: center;\r" +
    "\n" +
    "        top: 0;\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "</style>"
  );


  $templateCache.put('editview/app/views/editParentDetails.html',
    "<div class=\"edit_pages_content_main clearfix\">\r" +
    "\n" +
    "    <div class=\"edit_page_item\" id=\"divlnkaddparents\">\r" +
    "\n" +
    "        <div class=\"edit_page_item_head clearfix\">\r" +
    "\n" +
    "            <h4>Parents Details\r" +
    "\n" +
    "                <span style=\"color: #08CFD2\" id=\"spanEduModID\" visible=\"false\">\r" +
    "\n" +
    "                    <label id=\"lblParentsDetailsmodby\" forecolor=\"#08CFD2\"></label>\r" +
    "\n" +
    "                    </span>\r" +
    "\n" +
    "            </h4>\r" +
    "\n" +
    "            <div class=\"edit_page_item_ui clearfix\" ng-if=\"parentArr.length===0\">\r" +
    "\n" +
    "                <a data-toggle=\"tooltip\" data-original-title=\"Add Parents Details\" class=\"edit_page_add_button\" href=\"javascript:void(0);\" ng-click=\"populateModel('parent');\">Add</a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"edit_page_details_item\">\r" +
    "\n" +
    "            <div id=\"listparents\" ng-repeat=\"item in parentArr\">\r" +
    "\n" +
    "                <div id=\"reviewdiv\" ng-class=\"item.reviewstatus===false?'edit_page_details_item_desc clearfix reviewCls':'edit_page_details_item_desc clearfix'\">\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <label id=\"lfathername\"></label> Father Name{{item.reviewstatus}}</h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"LBfathername\">{{item.FatherName}}</span>\r" +
    "\n" +
    "                                </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"edit_page_item_ui clearfix\" ng-if=\"parentArr.length>0\">\r" +
    "\n" +
    "                                <a id=\"LinkButton1dfd\" href=\"javascript:void(0):\" data-original-title=\"Edit Parents Details\" class=\"edit_page_edit_button\" ng-click=\"populateModel('parent',item);\">Edit</a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <label id=\"lblfathereducation\" font-bold=\"true\">Education</label>\r" +
    "\n" +
    "                            </h6>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblfathereducationdetails\">\r" +
    "\n" +
    "                                    {{item.FatherEducationDetails }}\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                            </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <label id=\"lblFatherprofession\" font-bold=\"true\">Profession</label>\r" +
    "\n" +
    "                            </h6>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblfatherprofessiondetails\">\r" +
    "\n" +
    "                                   {{item.FatherProfDetails }}\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                            </h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"edit_page_details_item_desc clearfix\" id=\"fathercompnay\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <label id=\"lblfatherprofessionloc\" font-bold=\"true\">Company & JobLocation</label>\r" +
    "\n" +
    "                            </h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblfatherprofandloc\">\r" +
    "\n" +
    "                                   {{((item.FathercompanyName!=null && (item.FathercompanyName!=\"\")?item.FathercompanyName:\"NotSpecified\"))\r" +
    "\n" +
    "                                        +\" \"+((item.FatherJoblocation!=null && (item.FatherJoblocation!=\"\")?\",\" +\" \"+item.FatherJoblocation:''))}}\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                            </h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div id=\"ownerdiv0\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <label id=\"lblfathernumber\" font-bold=\"true\">Father contact nos</label>\r" +
    "\n" +
    "                                </h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblfathermobile\">\r" +
    "\n" +
    "                                       {{((item.FatherMobilenumber!=null && (item.FatherMobilenumber!=\"\")?item.FatherMobilenumber:\"\"))\r" +
    "\n" +
    "                                        +\" \"+((item.FatherLandNumber!=null && (item.FatherLandNumber!=\"\")?\"&\"+\" \"+item.FatherLandNumber:\"\")) }}\r" +
    "\n" +
    "                                </span>\r" +
    "\n" +
    "                                </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <label id=\"fatheremail\" font-bold=\"true\">Father Email</label>\r" +
    "\n" +
    "                                </h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblFatherEmail\">\r" +
    "\n" +
    "                                       {{ item.FatherEmail }}\r" +
    "\n" +
    "                                </span>\r" +
    "\n" +
    "                                </h5>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <label id=\"lblfathersfather\">Father's Father Name</label></h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblfathersfath\">\r" +
    "\n" +
    "                                  {{  ((item.FatherFathername!=null && (item.FatherFathername!=\"\")?item.FatherFathername:\"\"))\r" +
    "\n" +
    "                                        }}\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                            </h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div id=\"ownerdiv1\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <label id=\"FFContactNos\">FF contact nos</label></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblFFContactNos\">\r" +
    "\n" +
    "                                       {{((item.FFMobileNumberWithcode!=null && (item.FFMobileNumberWithcode!=\"\")?item.FFMobileNumberWithcode:\"\"))\r" +
    "\n" +
    "                                       + ((item.FFLandNumberwithCode!=null && item.FFLandNumberwithCode!=\"\")?\" & \"+item.FFLandNumberwithCode:\"\") }}\r" +
    "\n" +
    "                                </span>\r" +
    "\n" +
    "                                </h5>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <label id=\"FnativePlace\" font-bold=\"true\">Native Place</label>\r" +
    "\n" +
    "                            </h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblFnativePlace\">\r" +
    "\n" +
    "                                   {{\r" +
    "\n" +
    "                                        ((item.FatherNativeplace!=null && item.FatherNativeplace!=\"\")?item.FatherNativeplace:\"\" )+\r" +
    "\n" +
    "                                        ((item.FatherDistric!=null && item.FatherDistric!=\"\")?\" ,\"+item.FatherDistric:\"\")+\r" +
    "\n" +
    "                                        ((item.FatherState!=null && item.FatherState!=\"\")?\" ,\"+item.FatherState:\"\" )+\r" +
    "\n" +
    "                                        ((item.FatherCountry!=null && item.FatherCountry!=\"\")?\" ,\"+item.FatherCountry:\"\" )}}\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                            </h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <hr />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <label id=\"lblmothername\" font-bold=\"true\" forecolor=\"Red\">\r" +
    "\n" +
    "                                Mother Name\r" +
    "\n" +
    "                            </label>\r" +
    "\n" +
    "                            </h6>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblmothernameandedu\">\r" +
    "\n" +
    "                                    {{item.MotherName}}\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                            </h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <label id=\"lbleducationmother\">Education</label></h6>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblmotherducation\">\r" +
    "\n" +
    "                                   {{ ((item.MotherEducationDetails!=null && item.MotherEducationDetails!=\"\")?item.MotherEducationDetails:\"\" )}}\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                            </h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <label id=\"lblprofessionmotherr\" font-bold=\"true\">Profession</label>\r" +
    "\n" +
    "                            </h6>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblmotherprofdetails\">\r" +
    "\n" +
    "                                  {{((item.MotherProfedetails!=null && item.MotherProfedetails!=\"\")?\r" +
    "\n" +
    "                                                item.MotherProfedetails:\"\" )}}\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                            </h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div id=\"mothercompany\" class=\"edit_page_details_item_desc clearfix\" ng-hide=\"item.MotherProfedetails=='HouseWife'\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <label id=\"lblmotherprofession\">Company & JobLocation</label></h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblmotherprofandloc\">\r" +
    "\n" +
    "                                   {{((item.MothercompanyName!=null && (item.MothercompanyName!=\"\")?item.MothercompanyName:\"\"))+\" \"+\r" +
    "\n" +
    "                                            ((item.MotherJoblocation!=null && (item.MotherJoblocation!=\"\")?\", \"+\" \"+\r" +
    "\n" +
    "                                            item.MotherJoblocation:''))}}\r" +
    "\n" +
    "                                </span>\r" +
    "\n" +
    "                            </h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div id=\"ownerdiv2\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <label id=\"lblmothercontacts\">Mother contact nos</label></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblmompmobile\">\r" +
    "\n" +
    "                                       {{((item.MotherMobilenumber!=null && item.MotherMobilenumber!=\"\")?item.MotherMobilenumber:\"\" )+\" \"+((item.MotherLandNumber!=null && (item.MotherLandNumber!=\"\")?\"&\"+\" \"+item.MotherLandNumber:\"\"))}}\r" +
    "\n" +
    "                                </span>\r" +
    "\n" +
    "                                </h5>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <label id=\"lblmotheremail\" font-bold=\"true\">Mother Email</label>\r" +
    "\n" +
    "                                </h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblmomemail\">\r" +
    "\n" +
    "                                        {{ item.MotherEmail }}\r" +
    "\n" +
    "                                </span>\r" +
    "\n" +
    "                                </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <label id=\"lblmotherfatherupp\" font-bold=\"true\">Mother's Father Name</label>\r" +
    "\n" +
    "                            </h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblMotherFatherName\">\r" +
    "\n" +
    "                                   {{item.MotherFatherName }}\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                            </h5>\r" +
    "\n" +
    "                            </label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <label id=\"MotherFatherLastName\" font-bold=\"true\">Mother's Father SurName</label>\r" +
    "\n" +
    "                            </h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblMotherFatherLastName\">\r" +
    "\n" +
    "                                  {{item.MotherFatherLastName}}\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                            </h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div id=\"ownerdiv3\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <label id=\"mContactNos\" font-bold=\"true\">MF Contact nos</label>\r" +
    "\n" +
    "                                </h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblmContactNos\">\r" +
    "\n" +
    "                                       {{ item.MMMobileNumberWithcode+\r" +
    "\n" +
    "                                        ((item.MMLandNumberwithCode!=null && item.MMLandNumberwithCode!=\"\")?\" & \"+item.MMLandNumberwithCode:\"\") }}\r" +
    "\n" +
    "                                </span>\r" +
    "\n" +
    "                                </h5>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <label id=\"MNativePlace\" font-bold=\"true\">Native Place</label>\r" +
    "\n" +
    "                            </h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblMNativePlace\">\r" +
    "\n" +
    "                                   {{((item.MotherNativeplace!=null && item.MotherNativeplace!=\"\")?item.MotherNativeplace:\"\") +\r" +
    "\n" +
    "                                        ((item.MotherDistric!=null && item.MotherDistric!=\"\")?\" ,\"+item.MotherDistric:\"\" )+\r" +
    "\n" +
    "                                        ((item.MotherState!=null && item.MotherState!=\"\")?\" ,\"+item.MotherState:\"\" )+\r" +
    "\n" +
    "                                        ((item.MotherCountry!=null && item.MotherCountry!=\"\")?\" ,\"+item.MotherCountry:\"\" )}}\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                            </h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <div id=\"divParentIntercasteHide\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <label id=\"ParentsInterCaste\">Are Parents InterCaste</label></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblParentsInterCaste\">{{item.Intercaste }}</span>\r" +
    "\n" +
    "                                </h5>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <label id=\"lFatherCaste\">Father Caste</label></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblFatherCaste\">{{item.FatherCaste }}</span>\r" +
    "\n" +
    "                                </h5>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <label id=\"lMotherCaste\">Mother Caste</label>\r" +
    "\n" +
    "                                </h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblMotherCaste\">{{item.MotherCaste }}</span>\r" +
    "\n" +
    "                                </h5>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <hr />\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"edit_page_item\" id=\"divlnkAddcontactaddress\">\r" +
    "\n" +
    "        <div class=\"edit_page_item_head clearfix\">\r" +
    "\n" +
    "            <h4>Contact Address\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </h4>\r" +
    "\n" +
    "            <div class=\"edit_page_item_ui clearfix\" ng-if=\"addressArr.length===0\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <a ng-click=\"populateModel('Address',item);\" href=\"javascript:void(0);\" data-original-title=\"Add Contact Address\" class=\"edit_page_add_button\">Add</a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"edit_page_details_item\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div ng-repeat=\"item in addressArr\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div id=\"Div1\" ng-class=\"item.reviewstatus===false?'edit_page_details_item_desc clearfix reviewCls':'edit_page_details_item_desc clearfix'\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <label id=\"lblhousenum\" font-bold=\"true\">House/Flat No</label>\r" +
    "\n" +
    "                        </h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblhouseflat\">\r" +
    "\n" +
    "                                {{ item.FlatNumber}}\r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "                        </h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div id=\"divapartment\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <label id=\"lblapartmentname\" font-bold=\"true\">Apt Name</label>\r" +
    "\n" +
    "                        </h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblapartment\">\r" +
    "\n" +
    "                                {{ item.ApartmentName}}\r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "                        </h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"edit_page_item_ui clearfix\" ng-if=\"addressArr.length>0\">\r" +
    "\n" +
    "                        <a ng-click=\"populateModel('Address',item);\" href=\"javascript:void(0);\">Edit</a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div id=\"divareaname\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <label id=\"lblareaname\" font-bold=\"true\">Area Name</label>\r" +
    "\n" +
    "                        </h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblareanamee\">\r" +
    "\n" +
    "                                {{ item.AreaName}}\r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "                        </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <label id=\"lblstreet\" font-bold=\"true\">Street Name</label>\r" +
    "\n" +
    "                        </h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblstreetname\">\r" +
    "\n" +
    "                                {{ item.StreetName}}\r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "                        </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <label id=\"lblland\" font-bold=\"true\">Land Mark</label>\r" +
    "\n" +
    "                        </h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lbllandmark\">\r" +
    "\n" +
    "                                {{ item.LandMark}}\r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "                        </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <label id=\"lblcityy\" font-bold=\"true\">City</label>\r" +
    "\n" +
    "                        </h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblcityname\">\r" +
    "\n" +
    "                                {{ item.CityName+\" \"+(item.DistrictName!=null?\",\"+ item.DistrictName:\"\")+(item.StateName!=null?\",\"+ item.StateName:\"\")+(item.CountryName!=null?\",\"+item.CountryName:\"\")+(item.Zip!=null?\"-\"+item.Zip:\"\") }}\r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "                        </h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"edit_page_item\" id=\"divlnkAddphsysicall\">\r" +
    "\n" +
    "        <div class=\"edit_page_item_head clearfix\">\r" +
    "\n" +
    "            <h4>Physical Attribute & Health Details of Candidate</h4>\r" +
    "\n" +
    "            <div class=\"edit_page_item_ui clearfix\" ng-if=\"physicalArr.length===0\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <a href=\"javascript:void(0);\" ng-click=\"populateModel('physicalAttributes',item);\" data-original-title=\"Add Physical Attribute & Health Details\" class=\"edit_page_add_button\">Add</a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"edit_page_details_item\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div ng-repeat=\"item in physicalArr\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div id=\"Div2\" ng-class=\"item.reviewstatus===false?'edit_page_details_item_desc clearfix reviewCls':'edit_page_details_item_desc clearfix'\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <label id=\"lbllDiet\" font-bold=\"true\">Diet</label></h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblDiet\">\r" +
    "\n" +
    "                                {{ item.Diet}}\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                        </h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <label id=\"lbllDrink\">Drink</label></h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblDrink\">\r" +
    "\n" +
    "                                {{ item.Drink}}\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                        </h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <label id=\"lbllSmoke\">Smoke</label>\r" +
    "\n" +
    "                        </h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblSmoke\">\r" +
    "\n" +
    "                                {{ item.Smoke}}\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                        </h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <label id=\"lbllBodyType\">Body Type</label></h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblBodyType\">\r" +
    "\n" +
    "                                {{ item.BodyType}}\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                        </h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <label id=\"lblbodyweight\" font-bold=\"true\">Body Weight</label>\r" +
    "\n" +
    "                        </h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblweight\">\r" +
    "\n" +
    "                                {{ item.BodyWeight}}\r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "                        </h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <label id=\"lblbloodgroup\" font-bold=\"true\">Blood Group</label>\r" +
    "\n" +
    "                        </h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblbloodgrop\">\r" +
    "\n" +
    "                                {{ item.BloodGroupName}}\r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "                        </h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <label id=\"lblhealthconditions\" font-bold=\"true\">Health Conditions</label>\r" +
    "\n" +
    "                        </h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblhealthcondition\">\r" +
    "\n" +
    "                                {{ item.Healthcondition}}\r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "                        </h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"edit_page_item_ui clearfix\" ng-if=\"physicalArr.length>0\">\r" +
    "\n" +
    "                        <a data-original-title=\"Edit Physical Attribute & Health Details\" class=\"edit_page_edit_button\" href=\"javascript:void(0);\" ng-click=\"populateModel('physicalAttributes',item);\">Edit</a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <label id=\"lblhealthdescription\" font-bold=\"true\">Health Condition Description</label>\r" +
    "\n" +
    "                        </h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblhealthdescriptions\">\r" +
    "\n" +
    "                                {{ item.HealthConditionDescription}}\r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "                        </h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"edit_page_item\" id=\"divlnkaboutt\">\r" +
    "\n" +
    "        <div class=\"edit_page_item_head clearfix\">\r" +
    "\n" +
    "            <h4>About My Family </h4>\r" +
    "\n" +
    "            <div class=\"edit_page_item_ui clearfix\" ng-if=\"lblaboutMyfamily==='' || lblaboutMyfamily===null\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <a data-original-title=\"Add About My Family\" class=\"edit_page_add_button\" href=\"javascript:void(0);\" ng-click=\"populateModel('AboutFamily');\">Add</a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"edit_page_details_item\">\r" +
    "\n" +
    "            <div id=\"lstAboutMyFamily\">\r" +
    "\n" +
    "                <div id=\"Div3\" ng-class=\"AboutFamilyReviewStatus===false?'edit_page_details_item_desc clearfix reviewCls':'edit_page_details_item_desc clearfix'\">\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblAboutMyFamily\">\r" +
    "\n" +
    "                                    {{lblaboutMyfamily}}\r" +
    "\n" +
    "                                </span>\r" +
    "\n" +
    "                            </h5>\r" +
    "\n" +
    "                            <label id=\"Label5\" visible=\"false\"></label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"edit_page_item_ui clearfix\" ng-if=\"lblaboutMyfamily!='' && lblaboutMyfamily!=null\">\r" +
    "\n" +
    "                            <a href=\"javascript:void(0);\" class=\"edit_page_edit_button\" data-original-title=\"Edit About My Family\" ng-click=\"populateModel('AboutFamily',lblaboutMyfamily);\">Edit</a>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div id=\"popupDiv\">\r" +
    "\n" +
    "    <script type=\"text/ng-template\" id=\"parentModalContent.html\">\r" +
    "\n" +
    "        <form name=\"parentForm\" novalidate role=\"form\" ng-submit=\"ParentSubmit(parent)\">\r" +
    "\n" +
    "            <div class=\"modal-header\">\r" +
    "\n" +
    "                <h3 class=\"modal-title text-center\" id=\"modal-title\">Parent details\r" +
    "\n" +
    "                    <a href=\"javascript:void(0);\" ng-click=\"cancel();\">\r" +
    "\n" +
    "                        <ng-md-icon icon=\"close\" style=\"fill:#c73e5f\" class=\"pull-right\" size=\"20\"></ng-md-icon>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </h3>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "                <div class='modal-body clearfix pop_content_my'>\r" +
    "\n" +
    "                    <ul>\r" +
    "\n" +
    "                        <li>\r" +
    "\n" +
    "                            <h6>Father Details</h6>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lbleducationGroup\" class=\"pop_label_left\" style=\"color: red;\">Father Name<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"pop_controls_right form-group\">\r" +
    "\n" +
    "                                <input type=\"text\" ng-model=\"parent.txtFathername\" class=\"form-control\" tabindex=\"1\" required/>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblFEducation\" class=\"pop_label_left\">Education</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                <input type=\"text\" ng-model=\"parent.txtFEducation\" class=\"form-control\" maxlength=\"150\" tabindex=\"2\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblFProfession\" class=\"pop_label_left\">Profession</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                <input type=\"text\" ng-model=\"parent.txtFProfession\" class=\"form-control\" maxlength=\"200\" tabindex=\"3\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblCompanyName\" class=\"pop_label_left\">Company Name </label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                <input type=\"text\" ng-model=\"parent.txtCompany\" class=\"form-control\" maxlength=\"100\" tabindex=\"4\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblJobLocation\" class=\"pop_label_left\">Job Location</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                <input type=\"text\" ng-model=\"parent.txtJobLocation\" class=\"form-control\" maxlength=\"100\" tabindex=\"5\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <contact-directive emailhide=\"true\" dmobile=\"parent.ddlMobile\" strmobile=\"parent.txtMobile\" dalternative=\"parent.ddlfathermobile2\" stralternative=\"parent.txtfathermobile2\" dland=\"parent.ddlLandLineCountry\" strareacode=\"parent.txtAreCode\" strland=\"parent.txtLandNumber\"\r" +
    "\n" +
    "                            strmail=\"parent.txtEmail\"></contact-directive>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblFatherFname\" class=\"pop_label_left\">Father's father name </label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                <input type=text ng-model=\"parent.txtFatherFname\" class=\"form-control\" placeholder=\"Enter Father's father name\" maxlength=\"100\" tabindex=\"17\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <contact-directive emailhide=\"false\" dmobile=\"parent.ddlFatherfatherMobileCountryCode\" strmobile=\"parent.txtMobileFatherfather\" dalternative=\"parent.ddlfatherfatherAlternative\" stralternative=\"parent.txtfatherfatherAlternative\" dland=\"parent.ddlFatherFatherLandLineCode\"\r" +
    "\n" +
    "                            strareacode=\"parent.txtGrandFatherArea\" strland=\"parent.txtGrandFatherLandLinenum\"></contact-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <country-directive countryshow=\"false\" dcountry=\"dcountry\" cityshow=\"false\" othercity=\"false\" dstate=\"parent.ddlFState\" ddistrict=\"parent.ddlFDistric\"></country-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"FNativePlace\" class=\"pop_label_left\">Native Place</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                <input ng-model=\"parent.txtFNativePlace\" class=\"form-control\" maxlength=\"100\" tabindex=\"29\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li>\r" +
    "\n" +
    "                            <h6>Mother Details</h6>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblMotherName\" class=\"pop_label_left\" style=\"color: red;\">Mother Name<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right form-group\">\r" +
    "\n" +
    "                                <input ng-model=\"parent.txtMName\" class=\"form-control\" maxlength=\"100\" tabindex=\"30\" required/>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblMEducation\" class=\"pop_label_left\">Education</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                <input ng-model=\"parent.txtMEducation\" class=\"form-control\" maxlength=\"150\" tabindex=\"31\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblMProfession\" class=\"pop_label_left\">Profession</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                <input ng-model=\"parent.txtMProfession\" class=\"form-control\" maxlength=\"200\" tabindex=\"32\" />\r" +
    "\n" +
    "                                <label class=\"checkbox-inline checkbox_my\" style=\"padding: 5px 0 0 0;\">\r" +
    "\n" +
    "                <input type=checkbox ng-model=\"parent.chkbox\"  tabindex=\"33\"  ng-change=\"housewiseChk(parent);\"/><span>&nbsp;HouseWife</span>\r" +
    "\n" +
    "            </label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <div id=\"divmotherprofesseion\" ng-hide=\"parent.chkbox==true\">\r" +
    "\n" +
    "                            <li id=\"divComLocation\" class=\"clearfix form-group\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label for=\"lblMCompanyName\" class=\"pop_label_left\">Company Name </label>\r" +
    "\n" +
    "                                <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                    <input ng-model=\"parent.txtMCompanyName\" class=\"form-control\" maxlength=\"100\" tabindex=\"34\" />\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                                <label for=\"lblMJobLocation\" class=\"pop_label_left\">Job Location</label>\r" +
    "\n" +
    "                                <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                    <input ng-model=\"parent.txtMJobLocation\" class=\"form-control\" maxlength=\"100\" tabindex=\"35\" />\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div style=\"height: 15px;\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <contact-directive emailhide=\"true\" dmobile=\"parent.ddlMMobileCounCodeID\" strmobile=\"parent.txtMMobileNum\" dalternative=\"parent.ddlMMobileCounCodeID2\" stralternative=\"parent.txtMMobileNum2\" dland=\"parent.ddlMLandLineCounCode\" strareacode=\"parent.txtmAreaCode\"\r" +
    "\n" +
    "                            strland=\"parent.txtMLandLineNum\" strmail=\"parent.txtMEmail\"></contact-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblMotherFname\" class=\"pop_label_left\">Mother's Father Name </label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                                <input type=text ng-model=\"parent.txtMFatherFname\" class=\"form-control\" placeholder=\"FIRST NAME\" tabindex=\"47\" maxlength=\"100\" />\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblMotherFname\" class=\"pop_label_left\">Mother's Last Name </label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                                <input type=text ng-model=\"parent.txtMFatherLname\" class=\"form-control\" placeholder=\"LAST NAME\" tabindex=\"48\" maxlength=\"50\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <contact-directive emailhide=\"false\" dmobile=\"parent.ddlMotherfatheMobileCountryCode\" strmobile=\"parent.txtMotherfatheMobilenumber\" dalternative=\"parent.ddlmotherfatheralternative\" stralternative=\"parent.txtmotherfatheralternative\" dland=\"parent.ddlMotherFatherLandLineCode\"\r" +
    "\n" +
    "                            strareacode=\"parent.txtMotherFatherLandLineareacode\" strland=\"parent.txtMotherFatherLandLinenum\"></contact-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <country-directive countryshow=\"false\" dcountry=\"dcountry\" cityshow=\"false\" othercity=\"false\" dstate=\"parent.ddlMState\" ddistrict=\"parent.ddlMDistrict\"></country-directive>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"MNativePlace\" class=\"pop_label_left\">Native Place</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                <input type=text ng-model=\"parent.txtMNativePlace\" class=\"form-control\" maxlength=\"150\" tabindex=\"60\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"ParentIntercaste\" class=\"pop_label_left\">Are parents interCaste ? </label>\r" +
    "\n" +
    "                            <!--<div class=\"pop_controls_right pop_radios_list\">\r" +
    "\n" +
    "                                <label>\r" +
    "\n" +
    "                    <input ng-model=\"parent.rbtlParentIntercaste\" value=\"1\" type=\"radio\"><span>&nbsp;Yes</span>\r" +
    "\n" +
    "                </label>\r" +
    "\n" +
    "                                <label class=\"\">\r" +
    "\n" +
    "                    <input ng-model=\"parent.rbtlParentIntercaste\" value=\"0\" type=\"radio\"><span>&nbsp;No</span>\r" +
    "\n" +
    "                </label>\r" +
    "\n" +
    "                            </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <md-radio-group name=\"rbtlParentIntercaste\" style=\"font-weight: 700;color:black;\" layout=\"row\" ng-model=\"parent.rbtlParentIntercaste\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                                <md-radio-button value=\"1\" class=\"md-primary\">Yes</md-radio-button>\r" +
    "\n" +
    "                                <md-radio-button value=\"0\">No </md-radio-button>\r" +
    "\n" +
    "                            </md-radio-group>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div ng-if=\"parent.rbtlParentIntercaste==='1' || parent.rbtlParentIntercaste===1\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <li id=\"divddlFatherCaste\" class=\"clearfix form-group\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label for=\"lblFCaste\" class=\"pop_label_left\">Father Caste</label>\r" +
    "\n" +
    "                                <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <select multiselectdropdown ng-model=\"parent.ddlFatherCaste\" typeofdata=\"caste\" required></select>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li id=\"divddlMotherCaste\" class=\"clearfix form-group\">\r" +
    "\n" +
    "                                <label for=\"lblMCaste\" class=\"pop_label_left\">Mother Caste</label>\r" +
    "\n" +
    "                                <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                                    <select multiselectdropdown ng-model=\"parent.ddlMotherCaste\" typeofdata=\"caste\"></select>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <li class=\"row \">\r" +
    "\n" +
    "                            <br/>\r" +
    "\n" +
    "                            <!--<div class=\"col-lg-9\">\r" +
    "\n" +
    "                                <button type=\"submit\" class=\"button_custom pull-right\">Submit</button>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"col-lg-3\">\r" +
    "\n" +
    "                                <input value=\"Cancel\" class=\"button_custom button_custom_reset pull-right\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "                            </div>-->\r" +
    "\n" +
    "                            <edit-footer></edit-footer>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                    </ul>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "    </script>\r" +
    "\n" +
    "    <script type=\"text/ng-template\" id=\"AddressModalContent.html\">\r" +
    "\n" +
    "        <form name=\"addressForm\" novalidate role=\"form\" ng-submit=\"contactAddressSubmit(AdrrObj)\">\r" +
    "\n" +
    "            <div class=\"modal-header\">\r" +
    "\n" +
    "                <h3 class=\"modal-title text-center\" id=\"modal-title\">Contact Details\r" +
    "\n" +
    "                    <a href=\"javascript:void(0);\" ng-click=\"cancel();\">\r" +
    "\n" +
    "                        <ng-md-icon icon=\"close\" style=\"fill:#c73e5f\" class=\"pull-right\" size=\"20\"></ng-md-icon>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </h3>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "                <div class=\"modal-body clearfix pop_content_my\">\r" +
    "\n" +
    "                    <ul>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblHouse_flat\" class=\"pop_label_left\">House/Flat number<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right form-group\">\r" +
    "\n" +
    "                                <input ng-model=\"AdrrObj.txtHouse_flat\" class=\"form-control\" maxlength=\"50\" tabindex=\"1\" required/>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblApartmentName\" class=\"pop_label_left\">Apartment name</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                <input ng-model=\"AdrrObj.txtApartmentName\" class=\"form-control\" maxlength=\"150\" tabindex=\"2\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblStreetName\" class=\"pop_label_left\">Street name</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                <input ng-model=\"AdrrObj.txtStreetName\" class=\"form-control\" maxlength=\"150\" tabindex=\"3\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblAreaName\" class=\"pop_label_left\">Area Name</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                <input ng-model=\"AdrrObj.txtAreaName\" class=\"form-control\" maxlength=\"150\" tabindex=\"4\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lbleducationGroup\" class=\"pop_label_left\">Landmark</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <input ng-model=\"AdrrObj.txtLandmark\" class=\"form-control\" maxlength=\"150\" tabindex=\"5\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <country-directive countryshow=\"true\" cityshow=\"false\" othercity=\"false\" dcountry=\"AdrrObj.ddlCountryContact\" dstate=\"AdrrObj.ddlStateContact\" ddistrict=\"AdrrObj.ddlDistricContact\" require=true></country-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblCityParentContactPopupgroup\" class=\"pop_label_left\">City<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                <input ng-model=\"AdrrObj.txtCity\" class=\"form-control\" tabindex=\"9\" maxlength=\"100\" required/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblZip_pin\" class=\"pop_label_left\">Zip/Pin 	</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <input ng-model=\"AdrrObj.txtZip_no\" class=\"form-control\" maxlength=\"8\" tabindex=\"10\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <li class=\"row\">\r" +
    "\n" +
    "                            <br/>\r" +
    "\n" +
    "                            <!--<div class=\"col-lg-9\">\r" +
    "\n" +
    "                                <input value=\"Submit\" class=\"button_custom  pull-right\" type=\"submit\">\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"col-lg-3\">\r" +
    "\n" +
    "                                <input value=\"Cancel\" class=\"button_custom button_custom_reset pull-right\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "                            </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <edit-footer></edit-footer>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                    </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "    </script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <script type=\"text/ng-template\" id=\"PhysicalAttributeModalContent.html\">\r" +
    "\n" +
    "        <form name=\"PhysicalForm\" novalidate role=\"form\" ng-submit=\"physicalAtrrSubmit(physicalObj)\">\r" +
    "\n" +
    "            <div class=\"modal-header\">\r" +
    "\n" +
    "                <h3 class=\"modal-title text-center\" id=\"modal-title\">Physical Attributes & Health Details of Candidate\r" +
    "\n" +
    "                    <a href=\"javascript:void(0);\" ng-click=\"cancel();\">\r" +
    "\n" +
    "                        <ng-md-icon icon=\"close\" style=\"fill:#c73e5f\" class=\"pull-right\" size=\"20\"></ng-md-icon>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </h3>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "                <div class=\"modal-body clearfix pop_content_my\">\r" +
    "\n" +
    "                    <ul id=\"HealthDivClear\">\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblpDiet\" class=\"pop_label_left\">Diet</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <!--<label>\r" +
    "\n" +
    "                    <input ng-model=\"physicalObj.rbtlDiet\" value=\"27\" type=\"radio\"><span>&nbsp;Veg</span>\r" +
    "\n" +
    "                </label>\r" +
    "\n" +
    "                                <label class=\"\">\r" +
    "\n" +
    "                    <input ng-model=\"physicalObj.rbtlDiet\" value=\"28\" type=\"radio\"><span>&nbsp;Non Veg</span>\r" +
    "\n" +
    "                </label>\r" +
    "\n" +
    "                                <label class=\"\">\r" +
    "\n" +
    "                    <input ng-model=\"physicalObj.rbtlDiet\" value=\"29\" type=\"radio\"><span>&nbsp;Both</span>\r" +
    "\n" +
    "                </label>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-radio-group name=\"rbtlDiet\" style=\"font-weight: 700;color:black;\" layout=\"row\" ng-model=\"physicalObj.rbtlDiet\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                                    <md-radio-button value=\"27\" class=\"md-primary\">Veg</md-radio-button>\r" +
    "\n" +
    "                                    <md-radio-button value=\"28\">Non Veg </md-radio-button>\r" +
    "\n" +
    "                                    <md-radio-button value=\"29\">Both </md-radio-button>\r" +
    "\n" +
    "                                </md-radio-group>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblpDrink\" class=\"pop_label_left\">Drink</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <!--<label>\r" +
    "\n" +
    "                    <input ng-model=\"physicalObj.rbtlDrink\" value=\"30\" type=\"radio\"><span>&nbsp;Yes</span>\r" +
    "\n" +
    "                </label>\r" +
    "\n" +
    "                                <label class=\"\">\r" +
    "\n" +
    "                    <input ng-model=\"physicalObj.rbtlDrink\" value=\"31\" type=\"radio\"><span>&nbsp;No</span>\r" +
    "\n" +
    "                </label>\r" +
    "\n" +
    "                                <label class=\"\">\r" +
    "\n" +
    "                    <input ng-model=\"physicalObj.rbtlDrink\" value=\"32\" type=\"radio\"><span>&nbsp;Occasional</span>\r" +
    "\n" +
    "                </label>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-radio-group name=\"rbtlDrink\" style=\"font-weight: 700;color:black;\" layout=\"row\" ng-model=\"physicalObj.rbtlDrink\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                                    <md-radio-button value=\"30\" class=\"md-primary\">Yes</md-radio-button>\r" +
    "\n" +
    "                                    <md-radio-button value=\"31\">No </md-radio-button>\r" +
    "\n" +
    "                                    <md-radio-button value=\"32\">Occasional </md-radio-button>\r" +
    "\n" +
    "                                </md-radio-group>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblpSmoke\" class=\"pop_label_left\">Smoke</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <!--<label>\r" +
    "\n" +
    "                    <input ng-model=\"physicalObj.rbtlSmoke\" value=\"30\" type=\"radio\"><span>&nbsp;Yes</span>\r" +
    "\n" +
    "                </label>\r" +
    "\n" +
    "                                <label class=\"\">\r" +
    "\n" +
    "                    <input ng-model=\"physicalObj.rbtlSmoke\" value=\"31\" type=\"radio\"><span>&nbsp;No</span>\r" +
    "\n" +
    "                </label>\r" +
    "\n" +
    "                                <label class=\"\">\r" +
    "\n" +
    "                    <input ng-model=\"physicalObj.rbtlSmoke\" value=\"32\" type=\"radio\"><span>&nbsp;Occasional</span>\r" +
    "\n" +
    "                </label>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <md-radio-group name=\"rbtlSmoke\" style=\"font-weight: 700;color:black;\" layout=\"row\" ng-model=\"physicalObj.rbtlSmoke\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                                    <md-radio-button value=\"30\" class=\"md-primary\">Yes</md-radio-button>\r" +
    "\n" +
    "                                    <md-radio-button value=\"31\">No </md-radio-button>\r" +
    "\n" +
    "                                    <md-radio-button value=\"32\">Occasional </md-radio-button>\r" +
    "\n" +
    "                                </md-radio-group>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblpBodyType\" class=\"pop_label_left\">Body Type</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right  select-box-my\">\r" +
    "\n" +
    "                                <select multiselectdropdown ng-model=\"physicalObj.ddlBodyType\" typeofdata=\"bodyType\"></select>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblBodtWeight\" class=\"pop_label_left\">Body weight</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right select-box-my select-box-my-double\">\r" +
    "\n" +
    "                                <span>kgs</span>\r" +
    "\n" +
    "                                <input ng-model=\"physicalObj.txtBWKgs\" class=\"form-control\" tabindex=\"5\" width=\"200px\" ng-keyup=\"converttolbs(physicalObj);\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label id=\"lbllbs\" class=\"pop_label_left\">lbs</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <input ng-model=\"physicalObj.txtlbs\" class=\"form-control\" text=\"\" onkeyup=\"converttokgs(this.id);\" onkeydown=\"return checkwhitespace(event,this.id);\" onblur=\"validateLbs(this)\" tabindex=\"6\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblBloodGroup\" class=\"pop_label_left\">Blood Group</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                                <select multiselectdropdown ng-model=\"physicalObj.ddlBloodGroup\" typeofdata=\"bloodGroup\"></select>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblHealthConditions\" class=\"pop_label_left\">Health Conditions</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                <div class=\"select-box-my\">\r" +
    "\n" +
    "                                    <select multiselectdropdown ng-model=\"physicalObj.ddlHealthConditions\" typeofdata=\"healthCondition\"></select>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblHealthCondition\" class=\"pop_label_left\">Health Condition Description</label>\r" +
    "\n" +
    "                            <div class=\"\">\r" +
    "\n" +
    "                                <textarea ng-model=\"physicalObj.txtHealthCondition\" class=\"form-control\" tabindex=\"9\" rows=\"4\" style=\"width: 515px;\" maxlength=\"200\"></textarea>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"row\">\r" +
    "\n" +
    "                            <br/>\r" +
    "\n" +
    "                            <!--<div class=\"col-lg-9\">\r" +
    "\n" +
    "                                <input value=\"Submit\" class=\"button_custom  pull-right\" type=\"submit\">\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"col-lg-3\">\r" +
    "\n" +
    "                                <input value=\"Cancel\" class=\"button_custom button_custom_reset pull-right\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "                            </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <edit-footer></edit-footer>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                    </ul>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "    </script>\r" +
    "\n" +
    "    <script type=\"text/ng-template\" id=\"AboutFamilyModalContent.html\">\r" +
    "\n" +
    "        <form name=\"AboutForm\" novalidate role=\"form\" ng-submit=\"AboutMyfamilySubmit(aboutFamilyObj)\">\r" +
    "\n" +
    "            <div class=\"modal-header\">\r" +
    "\n" +
    "                <h3 class=\"modal-title text-center\" id=\"modal-title\">About My Family\r" +
    "\n" +
    "                    <a href=\"javascript:void(0);\" ng-click=\"cancel();\">\r" +
    "\n" +
    "                        <ng-md-icon icon=\"close\" style=\"fill:#c73e5f\" class=\"pull-right\" size=\"20\"></ng-md-icon>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </h3>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"modal-body clearfix pop_content_my\" id=\"modal-body\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"form-group\">\r" +
    "\n" +
    "                    <label class=\"control-label\">(Do Not Mention Any Contact Information Phone Numbers, Email Id’s or your Profile May be Rejected.)</label>\r" +
    "\n" +
    "                    <textarea class=\"form-control\" ng-model=\"aboutFamilyObj.txtAboutUs\" required=\"required\" type=\"text\"> </textarea>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <br/>\r" +
    "\n" +
    "                    <!--<div class=\"col-lg-9\">\r" +
    "\n" +
    "                        <input type=\"submit\" value=\"Submit\" class=\"button_custom  pull-right\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-lg-3\">\r" +
    "\n" +
    "                        <input value=\"Cancel\" class=\"button_custom button_custom_reset  pull-right\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "                    </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <edit-footer></edit-footer>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "    </script>\r" +
    "\n" +
    "    <alert-directive></alert-directive>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <style>\r" +
    "\n" +
    "        /*.has-feedback .form-control-feedback {\r" +
    "\n" +
    "            position: absolute;\r" +
    "\n" +
    "            margin: 0 0 0 0 !important;\r" +
    "\n" +
    "            right: 0;\r" +
    "\n" +
    "            display: block;\r" +
    "\n" +
    "            width: 34px;\r" +
    "\n" +
    "            height: 34px;\r" +
    "\n" +
    "            line-height: 34px;\r" +
    "\n" +
    "            text-align: center;\r" +
    "\n" +
    "        }*/\r" +
    "\n" +
    "        /*.pop_content_my ul .select-box-my-double .btn-group {\r" +
    "\n" +
    "            float: left;\r" +
    "\n" +
    "            width: 49% !important;\r" +
    "\n" +
    "            margin: 0 1% 0 0 !important;\r" +
    "\n" +
    "        }*/\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        .md-dialog-container {\r" +
    "\n" +
    "            z-index: 99999999999;\r" +
    "\n" +
    "        }\r" +
    "\n" +
    "    </style>"
  );


  $templateCache.put('editview/app/views/editPartnerPreferences.html',
    "<div class=\"edit_pages_content_main clearfix\">\r" +
    "\n" +
    "    <div ng-repeat=\"item in partnerPrefArr\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"edit_page_item\">\r" +
    "\n" +
    "            <div class=\"edit_page_item_head clearfix\">\r" +
    "\n" +
    "                <h4>PartnerPreference Details\r" +
    "\n" +
    "                </h4>\r" +
    "\n" +
    "                <div class=\"edit_page_item_ui clearfix\" ng-if=\"partnerPrefArr.length===0\">\r" +
    "\n" +
    "                    <a ng-click=\"partnerprefPopulate();\" class=\"edit_page_add_button\" href=\"javascript:void(0);\">Add</a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"edit_page_details_item\">\r" +
    "\n" +
    "                <div id=\"uppartner\">\r" +
    "\n" +
    "                    <div id=\"reviewdiv\" ng-class=\"item.reviewstatus===false?'edit_page_details_item_desc clearfix reviewCls':'edit_page_details_item_desc clearfix'\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div id=\"UpdatePanel21\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <span id=\"partnergen\" style=\"color:Red;font-weight:bold;\">Gender</span></h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblpartnergen\" style=\"color:Red;\">{{ item.Gender}}</span></h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div ng-if=\"partnerPrefArr.length>0\" class=\"edit_page_item_ui clearfix\">\r" +
    "\n" +
    "                            <a ng-click=\"partnerprefPopulate(item);\" class=\"edit_page_edit_button\" href=\"javascript:void(0);\">Edit</a>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"UpdatePanel10\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <span id=\"agegap\" style=\"font-weight:bold;\">Age Gap</span></h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblagegap\">{{ item.AgeGap}}</span></h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"UpdatePanel13\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <span id=\"height\" style=\"font-weight:bold;\">Height</span></h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblheight\">{{ item.Height}}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"UpdatePanel15\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <span id=\"mothertongue\" style=\"font-weight:bold;\">mother tongue</span></h6>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblmothertongue\">{{ item.Mothertongue }}</span></h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"UpdatePanel16\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"Religion\" style=\"font-weight:bold;\">Religion</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblReligion\">{{ item.Religion}}</span></h5>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"UpdatePanel17\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"caste\" style=\"font-weight:bold;\">caste</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblcaste\">{{ item.Caste}}</span></h5>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"UpdatePanel1\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"subcaste\" style=\"font-weight:bold;\">subcaste</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblsubcaste\">{{ item.Subcaste}}</span></h5>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"UpdatePanel2\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"maritalstatus\" style=\"font-weight:bold;\">marital status</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblmaritalstatus\">{{ item.MaritalStatus}}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"updateeducationgroup\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"Education\" style=\"font-weight:bold;\">Education</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblEducation\">{{ item.EducationGroup!=null?item.EducationGroup:item.EducationCategory}}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div id=\"UpdatePanel5\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <span id=\"profession\" style=\"font-weight:bold;\">profession</span></h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblprofession\">{{ item.ProfessionGroup}}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div id=\"UpdatePanel6\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"MangalikKujadosham\" style=\"font-weight:bold;\">Manglik/Kujadosham</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblMangalikKujadosham\">{{ item.Kujadosham}}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"UpdatePanel7\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"preferredstarLanguage\" style=\"font-weight:bold;\">preferred star Language</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblpreferredstarLanguage\">{{ item.StarLanguage}}</span></h5>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div id=\"UpdatePanel8\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"preferredstar\" style=\"font-weight:bold;\">Non preferred stars</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblpreferredstar\">{{ item.Stars}}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"UpdatePanel12\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"Diet\" style=\"font-weight:bold;\">Diet</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblDiet\">{{ item.Diet}}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"UpdatePanel18\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"preferredCountry\" style=\"font-weight:bold;\">preferred Country</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblpreferredCountry\">{{ item.CountryName}}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"UpdatePanel19\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"preferredState\" style=\"font-weight:bold;\">preferred State</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblpreferredState\">{{ item.StateName}}</span></h5>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"UpdatePanel36\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"RegionName\" style=\"font-weight:bold;\">Region</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblRegionName\">{{ item.RegionName}}</span></h5>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"UpdatePanel40\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"BranchName\" style=\"font-weight:bold;\">Branch</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblBranchName\">{{ item.BranchName}}</span></h5>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"edit_page_item\">\r" +
    "\n" +
    "            <div class=\"edit_page_item_head clearfix\">\r" +
    "\n" +
    "                <h4>Partner Description ( Describe qualities you are looking for in your partner)</h4>\r" +
    "\n" +
    "                <div class=\"edit_page_item_ui clearfix\">\r" +
    "\n" +
    "                    <div ng-if=\"item.PartnerDescripition==='' || item.PartnerDescripition===null\">\r" +
    "\n" +
    "                        <a id=\"lnkpartnerdesc\" class=\"edit_page_add_button\" href=\"javascript:void(0);\" ng-click=\"partnerdescPopulate();\"> Add</a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"edit_page_details_item\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div>\r" +
    "\n" +
    "                    <div id=\"UpdatePanel9\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblpartnerdesc\">{{ item.PartnerDescripition}}</span></h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div ng-if=\"item.PartnerDescripition!=''  && item.PartnerDescripition!=null\" class=\"edit_page_item_ui clearfix\">\r" +
    "\n" +
    "                        <a id=\"lnkpartnerdesc\" class=\"edit_page_edit_button\" href=\"javascript:void(0);\" ng-click=\"partnerdescPopulate(item);\"> Edit</a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"partnerPrefContent.html\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <form name=\"partnerFormForm\" novalidate role=\"form\" ng-submit=\"partnerPrefSubmit(partnerObj)\" accessible-form>\r" +
    "\n" +
    "        <div class=\"modal-header\">\r" +
    "\n" +
    "            <h3 class=\"modal-title text-center\" id=\"modal-title\">Partnerprefernece details\r" +
    "\n" +
    "                <a href=\"javascript:void(0);\" ng-click=\"cancel();\">\r" +
    "\n" +
    "                    <ng-md-icon icon=\"close\" style=\"fill:#c73e5f\" class=\"pull-right\" size=\"25\">Delete</ng-md-icon>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-body clearfix pop_content_my\" id=\"modal-body\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <ul id=\"divclear\">\r" +
    "\n" +
    "                <li class=\"clearfix\">\r" +
    "\n" +
    "                    <label for=\"lblGender\" class=\"pop_label_left\">Gender</label>\r" +
    "\n" +
    "                    <!--<div class=\"pop_controls_right pop_radios_list clearfix\">\r" +
    "\n" +
    "                        <label>\r" +
    "\n" +
    "                <input ng-model=\"partnerObj.rbtlGender\" value=\"1\" type=\"radio\"><span>&nbsp;Male</span></label>\r" +
    "\n" +
    "                        <label>\r" +
    "\n" +
    "                <input ng-model=\"partnerObj.rbtlGender\" value=\"2\" type=\"radio\"><span>&nbsp;Female</span></label>\r" +
    "\n" +
    "                    </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <md-radio-group name=\"rbtlGender\" style=\"font-weight: 700;color:black;\" layout=\"row\" ng-model=\"partnerObj.rbtlGender\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                        <md-radio-button value=\"1\" class=\"md-primary\">Male</md-radio-button>\r" +
    "\n" +
    "                        <md-radio-button value=\"2\">Female </md-radio-button>\r" +
    "\n" +
    "                    </md-radio-group>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblagegapp\" class=\"pop_label_left\">Age Gap<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my select-box-my-double input-group\">\r" +
    "\n" +
    "                        <select multiselectdropdown ng-model=\"partnerObj.ddlFromAge\" ng-options=\"item.value as item.label for item in ageGapArr\" required></select>\r" +
    "\n" +
    "                        <select multiselectdropdown ng-model=\"partnerObj.ddlToAge\" ng-options=\"item.value as item.label for item in ageGapArr\" required></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblpatnerheight\" class=\"pop_label_left\">Height<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my select-box-my-double input-group\">\r" +
    "\n" +
    "                        <select multiselectdropdown required ng-model=\"partnerObj.ddlFromheight\" typeofdata=height required></select>\r" +
    "\n" +
    "                        <select multiselectdropdown required ng-model=\"partnerObj.ddltoHeight\" typeofdata=height required></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblReligion\" class=\"pop_label_left\">Religion<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my input-group\">\r" +
    "\n" +
    "                        <select multiselectdropdown multiple=\"multiple\" ng-model=\"partnerObj.lstReligion\" typeofdata=Religion ng-change=\"changeBind('caste',partnerObj.lstReligion,partnerObj.lstMothertongue);\" required></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblmothertongue\" class=\"pop_label_left\">Mother tongue<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my input-group\">\r" +
    "\n" +
    "                        <select multiselectdropdown multiple ng-model=\"partnerObj.lstMothertongue\" typeofdata=Mothertongue ng-change=\"changeBind('caste',partnerObj.lstReligion,partnerObj.lstMothertongue);\" required></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblpartnerCaste\" class=\"pop_label_left\">Caste<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my input-group\">\r" +
    "\n" +
    "                        <select multiselectdropdown multiple ng-model=\"partnerObj.lstCaste\" ng-options=\"item.value as item.label for item in casteArr\" ng-change=\"changeBind('subCaste',partnerObj.lstCaste);\" required></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblSubcaste\" class=\"pop_label_left\">Subcaste</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my \">\r" +
    "\n" +
    "                        <select multiselectdropdown multiple ng-model=\"partnerObj.lstSubcaste\" ng-options=\"item.value as item.label for item in subCasteArr\"></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblMaritalstatus\" class=\"pop_label_left\">Marital status<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my input-group\">\r" +
    "\n" +
    "                        <select multiselectdropdown multiple ng-model=\"partnerObj.lstMaritalstatus\" typeofdata=\"MaritalStatus\" required></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblEducationcategory\" class=\"pop_label_left\">Education category</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <select multiselectdropdown multiple ng-model=\"partnerObj.lstEducationcategory\" typeofdata=educationcategory ng-change=\"changeBind('EducationCatgory',partnerObj.lstEducationcategory);\"></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblEducationgroup\" class=\"pop_label_left\">Education group</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <select multiselectdropdown multiple ng-model=\"partnerObj.lstEducationgroup\" ng-options=\"item.value as item.label for item in eduGroupArr\"></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblEmployedin\" class=\"pop_label_left\">Employed in</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <select multiselectdropdown multiple ng-model=\"partnerObj.lstEmployedin\" typeofdata=\"ProfCatgory\"></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblProfessiongroup\" class=\"pop_label_left\">Profession group </label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <select multiselectdropdown multiple ng-model=\"partnerObj.lstProfessiongroup\" typeofdata=\"ProfGroup\"></select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblPreferredcountry\" class=\"pop_label_left\">Preferred country 	</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <select multiselectdropdown multiple ng-model=\"partnerObj.lstPreferredcountry\" typeofdata=Country ng-change=\"changeBind('Country',partnerObj.lstPreferredcountry);\"></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblPreferredstate\" class=\"pop_label_left\">Preferred state</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <select multiselectdropdown multiple ng-model=\"partnerObj.lstPreferredstate\" ng-options=\"item.value as item.label for item in stateArr\"></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\" id=\"divRegioncontrol\">\r" +
    "\n" +
    "                    <label for=\"lblRegion\" class=\"pop_label_left\">Region</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <select multiselectdropdown multiple ng-model=\"partnerObj.lstRegion\" typeofdata=\"region\" ng-change=\"changeBind('region',partnerObj.lstRegion);\"></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblBranch\" class=\"pop_label_left\">Branch</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <select multiselectdropdown multiple ng-model=\"partnerObj.lstBranch\" ng-options=\"item.value as item.label for item in branchArr\"></select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix\">\r" +
    "\n" +
    "                    <label for=\"lblDiet\" class=\"pop_label_left\">Diet</label>\r" +
    "\n" +
    "                    <!--<div class=\"pop_controls_right pop_radios_list clearfix\">\r" +
    "\n" +
    "                        <label>\r" +
    "\n" +
    "                <input ng-model=\"partnerObj.rbtDiet\" value=\"27\" type=\"radio\"><span>&nbsp;Veg</span></label>\r" +
    "\n" +
    "                        <label>\r" +
    "\n" +
    "                <input ng-model=\"partnerObj.rbtDiet\" value=\"28\" type=\"radio\"><span>&nbsp;Non Veg</span></label>\r" +
    "\n" +
    "                        <label>\r" +
    "\n" +
    "                <input ng-model=\"partnerObj.rbtDiet\" value=\"29\" type=\"radio\"><span>&nbsp;Both</span></label>\r" +
    "\n" +
    "                    </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <md-radio-group name=\"rbtDiet\" style=\"font-weight: 700;color:black;\" layout=\"row\" ng-model=\"partnerObj.rbtDiet\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                        <md-radio-button value=\"27\" class=\"md-primary\">Veg</md-radio-button>\r" +
    "\n" +
    "                        <md-radio-button value=\"28\"> Non Veg </md-radio-button>\r" +
    "\n" +
    "                        <md-radio-button value=\"29\"> Both </md-radio-button>\r" +
    "\n" +
    "                    </md-radio-group>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li class=\"clearfix\">\r" +
    "\n" +
    "                    <label for=\"lblManglik\" class=\"pop_label_left\">Manglik/Kuja dosham</label>\r" +
    "\n" +
    "                    <!--<div class=\"pop_controls_right pop_radios_list clearfix\">\r" +
    "\n" +
    "                        <label>\r" +
    "\n" +
    "                <input ng-model=\"partnerObj.rbtManglikKujadosham\" value=\"0\" type=\"radio\"><span>&nbsp;Yes</span></label>\r" +
    "\n" +
    "                        <label>\r" +
    "\n" +
    "                <input ng-model=\"partnerObj.rbtManglikKujadosham\" value=\"1\" type=\"radio\"><span>&nbsp;No</span></label>\r" +
    "\n" +
    "                        <label>\r" +
    "\n" +
    "                <input ng-model=\"partnerObj.rbtManglikKujadosham\" value=\"2\" type=\"radio\"><span>&nbsp;Does Not Matter</span></label>\r" +
    "\n" +
    "                    </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <md-radio-group name=\"rbtManglikKujadosham\" style=\"font-weight: 700;color:black;\" layout=\"row\" ng-model=\"partnerObj.rbtManglikKujadosham\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                        <md-radio-button value=\"0\" class=\"md-primary\">Yes</md-radio-button>\r" +
    "\n" +
    "                        <md-radio-button value=\"1\">No </md-radio-button>\r" +
    "\n" +
    "                        <md-radio-button value=\"2\"> Does Not Matter </md-radio-button>\r" +
    "\n" +
    "                    </md-radio-group>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix\">\r" +
    "\n" +
    "                    <label for=\"lblPreferredstar\" class=\"pop_label_left\">Preferred star Language</label>\r" +
    "\n" +
    "                    <!--<div class=\"pop_controls_right pop_radios_list clearfix\">\r" +
    "\n" +
    "                        <label>\r" +
    "\n" +
    "                <input ng-model=\"partnerObj.rbtPreferredstarLanguage\" ng-change=\"changeBind('star',partnerObj.rbtPreferredstarLanguage);\" value=\"1\" type=\"radio\"><span>&nbsp;Telugu</span></label>\r" +
    "\n" +
    "                        <label>\r" +
    "\n" +
    "                <input ng-model=\"partnerObj.rbtPreferredstarLanguage\" ng-change=\"changeBind('star',partnerObj.rbtPreferredstarLanguage);\" value=\"2\" type=\"radio\"><span>&nbsp;Tamil</span></label>\r" +
    "\n" +
    "                        <label>\r" +
    "\n" +
    "                <input ng-model=\"partnerObj.rbtPreferredstarLanguage\" ng-change=\"changeBind('star',partnerObj.rbtPreferredstarLanguage);\" value=\"3\" type=\"radio\"><span>&nbsp;Kannada</span></label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <md-radio-group name=\"rbtPreferredstarLanguage\" style=\"font-weight: 700;color:black;\" ng-change=\"changeBind('star',partnerObj.rbtPreferredstarLanguage);\" layout=\"row\" ng-model=\"partnerObj.rbtPreferredstarLanguage\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                        <md-radio-button value=\"1\" class=\"md-primary\">Telugu</md-radio-button>\r" +
    "\n" +
    "                        <md-radio-button value=\"2\">Tamil </md-radio-button>\r" +
    "\n" +
    "                        <md-radio-button value=\"3\">Kannada</md-radio-button>\r" +
    "\n" +
    "                    </md-radio-group>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <label for=\"\" class=\"pop_label_left\">Star Preference</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <!--<div class=\"pop_controls_right pop_radios_list clearfix\">\r" +
    "\n" +
    "                        <label>\r" +
    "\n" +
    "                <input ng-model=\"partnerObj.rbtPreferredstars\" value=\"0\" type=\"radio\" aria-selected><span>&nbsp;Preferredstars</span></label>\r" +
    "\n" +
    "                        <label>\r" +
    "\n" +
    "                <input ng-model=\"partnerObj.rbtPreferredstars\" value=\"1\" type=\"radio\"><span>&nbsp;NonPreferredstars</span></label>\r" +
    "\n" +
    "                    </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <md-radio-group name=\"rbtPreferredstars\" style=\"font-weight: 700;color:black;\" layout=\"row\" ng-model=\"partnerObj.rbtPreferredstars\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                        <md-radio-button value=\"0\" class=\"md-primary\">Preferredstars</md-radio-button>\r" +
    "\n" +
    "                        <md-radio-button value=\"1\">NonPreferredstars </md-radio-button>\r" +
    "\n" +
    "                    </md-radio-group>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"\" class=\"pop_label_left\"></label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <select multiselectdropdown multiple ng-model=\"partnerObj.lstpreferedstars\" ng-options=\"item.value as item.label for item in starArr\"></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"row\">\r" +
    "\n" +
    "                    <br/>\r" +
    "\n" +
    "                    <!--<div class=\"col-lg-9\">\r" +
    "\n" +
    "                        <input value=\"Submit\" class=\"button_custom  pull-right\" type=\"submit\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-lg-3\">\r" +
    "\n" +
    "                        <input value=\"Cancel\" class=\"button_custom button_custom_reset pull-right\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "                    </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <edit-footer></edit-footer>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"partnerDescContent.html\">\r" +
    "\n" +
    "    <form name=\"aboutForm\" novalidate role=\"form\" ng-submit=\"partnerDescriptionSubmit(partnerDescObj)\">\r" +
    "\n" +
    "        <div class=\"modal-header\">\r" +
    "\n" +
    "            <h3 class=\"modal-title text-center\" id=\"modal-title\">Partner Description\r" +
    "\n" +
    "                <a href=\"javascript:void(0);\" ng-click=\"cancel();\">\r" +
    "\n" +
    "                    <ng-md-icon icon=\"close\" style=\"fill:#c73e5f\" class=\"pull-right\" size=\"20\"></ng-md-icon>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-body clearfix pop_content_my\" id=\"modal-body\">\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <textarea ng-model=\"partnerDescObj.txtpartnerdescription\" style=\"width: 500px; height: 150px;\" class=\"col-lg-10\" maxlength=\"1000\" required ng-class=\"form-control\" required />\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"row\">\r" +
    "\n" +
    "                    <br/>\r" +
    "\n" +
    "                    <!--<div class=\"col-lg-9\">\r" +
    "\n" +
    "                        <input type=\"submit\" value=\"Submit\" class=\"button_custom  pull-right\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-lg-3\">\r" +
    "\n" +
    "                        <input value=\"Cancel\" class=\"button_custom button_custom_reset  pull-right\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "                    </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <edit-footer></edit-footer>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "<alert-directive></alert-directive>"
  );


  $templateCache.put('editview/app/views/editPropertyDetails.html',
    "<div class=\"edit_pages_content_main clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"edit_page_item\">\r" +
    "\n" +
    "        <div id=\"upppp\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"edit_page_item_head clearfix\">\r" +
    "\n" +
    "                <h4>Property Details</h4>\r" +
    "\n" +
    "                <div class=\"edit_page_item_ui clearfix\" ng-if=\"propertyArr.length===0\">\r" +
    "\n" +
    "                    <a class=\"edit_page_add_button\" href=\"javascript:void(0);\" ng-click=\"populateProperty()\">Add</a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"edit_page_details_item\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div id=\"reviewdiv\" ng-class=\"item.reviewstatus===false?'edit_page_details_item_desc clearfix reviewCls':'edit_page_details_item_desc clearfix'\" ng-repeat=\"item in propertyArr\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div>\r" +
    "\n" +
    "                    <div id=\"uplFamilyStatus\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <span id=\"lblfamilystatus\" style=\"font-weight: bold;\">Family Status</span></h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblfmstatus\">{{(item.FamilyStatus!=null && item.FamilyStatus!=\"\")?item.FamilyStatus:\"Not Specified\" }}</span></h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div ng-if=\"propertyArr.length>0\" class=\"edit_page_item_ui clearfix\">\r" +
    "\n" +
    "                        <a id=\"lnkedittt\" class=\"edit_page_edit_button\" href=\"javascript:void(0);\" ng-click=\"populateProperty(item)\">Edit</a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                    <h6>\r" +
    "\n" +
    "                        <span id=\"lblproperty\" style=\"font-weight: bold;\">Property Value</span></h6>\r" +
    "\n" +
    "                    <h5>\r" +
    "\n" +
    "                        <span id=\"lblpropertyval\">{{((item.PropertyValue!=null && item.PropertyValue!=\"\")?item.PropertyValue+\" Lakhs\":\"\")}}</span>\r" +
    "\n" +
    "                    </h5>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div id=\"isproperty\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <h6>\r" +
    "\n" +
    "                        <label id=\"lblpropertysharedproperty\" style=\"font-weight: bold;\">Property Type</label></h6>\r" +
    "\n" +
    "                    <h5>\r" +
    "\n" +
    "                        <span id=\"lblisProperty\">{{((item.isProperty!=null && item.isProperty!=\"\")?item.isProperty:\"Not Specified\") }}</span></h5>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                    <h6>\r" +
    "\n" +
    "                        <span id=\"lblpropdet\" style=\"font-weight: bold;\">Property Details</span></h6>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <h5>\r" +
    "\n" +
    "                        <span id=\"lblpropertydetails\">{{(item.PropertyDetails!=null && (item.PropertyDetails!=\"\"))?item.PropertyDetails:\"\"}}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <hr>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <script type=\"text/ng-template\" id=\"propertyContent.html\">\r" +
    "\n" +
    "        <form name=\"propertyForm\" novalidate role=\"form\" ng-submit=\"propertySubmit(proObj)\">\r" +
    "\n" +
    "            <div class=\"modal-header\">\r" +
    "\n" +
    "                <h3 class=\"modal-title text-center\">Property Details\r" +
    "\n" +
    "                    <a href=\"javascript:void(0);\" ng-click=\"cancel();\">\r" +
    "\n" +
    "                        <ng-md-icon icon=\"close\" style=\"fill:#c73e5f\" class=\"pull-right\" size=\"20\">Delete</ng-md-icon>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </h3>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"modal-body clearfix pop_content_my\" id=\"modal-body\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <ul id=\"ulproperty\">\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                        <label for=\"lblfamilyStatus\" class=\"pop_label_left\">Family Status</label>\r" +
    "\n" +
    "                        <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                            <select multiselectdropdown ng-model=\"proObj.ddlFamilyStatus\" typeofdata=\"familyStatus\"></select>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"clearfix\">\r" +
    "\n" +
    "                        <label for=\"lblSharedProperty\" style=\"padding-top: 2%;\" class=\"pop_label_left\">Is shared property</label>\r" +
    "\n" +
    "                        <!--<div class=\"pop_controls_right pop_radios_list\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <label class=\"\">\r" +
    "\n" +
    "                <input ng-model=\"proObj.rdlSharedProperty\" value=\"1\" type=\"radio\" checked><span>&nbsp;Yes</span>\r" +
    "\n" +
    "            </label> &nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "                            <label class=\"\"><input ng-model=\"proObj.rdlSharedProperty\" value=\"0\" type=\"radio\"><span>&nbsp;No</span>\r" +
    "\n" +
    "            </label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <md-input-container style=\"font-weight: 700;color:black;\">\r" +
    "\n" +
    "                            <md-radio-group name=\"rdlSharedProperty\" layout=\"row\" ng-model=\"proObj.rdlSharedProperty\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                                <md-radio-button value=\"1\" class=\"md-primary\">Yes</md-radio-button>\r" +
    "\n" +
    "                                <md-radio-button value=\"0\"> No </md-radio-button>\r" +
    "\n" +
    "                            </md-radio-group>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\" style=\"display: none;\">\r" +
    "\n" +
    "                        <label for=\"lblQuantity\" class=\"pop_label_left\">Quantity</label>\r" +
    "\n" +
    "                        <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                            <input ng-model=\"proObj.txtQuantity\" class=\"form-control col-lg-3\" />\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                        <label for=\"lblValueofproperty\" class=\"pop_label_left\">Value of property</label>\r" +
    "\n" +
    "                        <div class=\"pop_controls_right select-box-my select-box-my-double\">\r" +
    "\n" +
    "                            <input ng-model=\"proObj.txtValueofproperty\" class=\"form-control\" maxlength=\"5\" onkeydown=\"return (((event.keyCode == 8) || (event.keyCode == 46) || (event.keyCode >= 35 && event.keyCode <= 40) || (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)));\"\r" +
    "\n" +
    "                            />\r" +
    "\n" +
    "                            <span font-bold=\"true\">Lakhs</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <label for=\"lblQuantity\" class=\"pop_label_left\">Property description</label>\r" +
    "\n" +
    "                        <div class=\"\">\r" +
    "\n" +
    "                            <textarea ng-model=\"proObj.txtPropertydesc\" style=\"width:100%;\" maxlength=\"500\" rows=\"5\" width=\"515\"></textarea>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                        <div style=\"display: none;\">\r" +
    "\n" +
    "                            <label for=\"lblShowingviewprofile\" class=\"pop_label_left\">Showing view profile</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right pop_radios_list\">\r" +
    "\n" +
    "                                <label class=\"\">\r" +
    "\n" +
    "                    <input ng-model=\"proObj.rbtShowViewProfile\" value=\"1\" type=\"radio\" checked><span>&nbsp;Yes</span>\r" +
    "\n" +
    "                </label> &nbsp;\r" +
    "\n" +
    "                                <label class=\"\"><input ng-model=\"proObj.rbtShowViewProfile\" value=\"0\" type=\"radio\"><span>&nbsp;No</span>\r" +
    "\n" +
    "                </label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"row \">\r" +
    "\n" +
    "                        <!--<div class=\"col-lg-9\">\r" +
    "\n" +
    "                            <input type=\"submit\" value=\"Submit\" class=\"button_custom  pull-right\">\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-lg-3\">\r" +
    "\n" +
    "                            <input value=\"Cancel\" class=\"button_custom button_custom_reset  pull-right\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "                        </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <edit-footer></edit-footer>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "    </script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<alert-directive></alert-directive>"
  );


  $templateCache.put('editview/app/views/editReferenceDetails.html',
    "<div class=\"edit_pages_content_main clearfix\">\r" +
    "\n" +
    "    <div class=\"edit_page_item\">\r" +
    "\n" +
    "        <div class=\"edit_page_item_head clearfix\">\r" +
    "\n" +
    "            <h4>Reference Details\r" +
    "\n" +
    "            </h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"edit_page_item_ui clearfix\">\r" +
    "\n" +
    "                <a class=\"edit_page_add_button\" href=\"javascript:void(0)\" ng-click=\"referencePopulate();\">Add</a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"edit_page_details_item\">\r" +
    "\n" +
    "            <div id=\"fullupdate\">\r" +
    "\n" +
    "                <div ng-class=\"item.reviewstatus===false?'edit_page_details_item_desc clearfix reviewCls':'edit_page_details_item_desc clearfix'\" ng-repeat=\"item in ReferenceArr\">\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <div id=\"uplRelationShipType\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"RelationShipType\" style=\"font-weight:bold;\">RelationShip Type</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblRelationShipType\">{{item.Relatioshiptype }}</span></h5>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div ng-if=\"ReferenceArr.length>0\" class=\"edit_page_item_ui clearfix\">\r" +
    "\n" +
    "                            <a class=\"edit_page_edit_button\" href=\"javascript:void(0);\" ng-click=\"referencePopulate(item);\">Edit</a>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <span id=\"Name\" style=\"font-weight:bold;\">Name</span></h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblName\">{{item.RefrenceName }}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div id=\"uplEducationRef\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div id=\"uplProfessionDetails\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <span id=\"ProfessionDetails\" style=\"font-weight:bold;\">Profession</span></h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblProfessionDetails\">{{item.RefrenceProfessionDetails }}</span>\r" +
    "\n" +
    "                            </h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div id=\"uplNativePlace\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <span id=\"NativePlace\" style=\"font-weight:bold;\">Native Place</span></h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblNativePlace\">{{item.RefrenceNativePlace }}</span></h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div id=\"uplCurrentLocation\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <span id=\"CurrentLocation\" style=\"font-weight:bold;\">Current Location</span></h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblCurrentLocation\">{{item.RefenceCurrentLocation }}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div id=\"update0\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div id=\"ownerdiv0\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div id=\"uplContacts\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                                    <h6>\r" +
    "\n" +
    "                                        <span id=\"Contacts\" style=\"font-weight:bold;\">Contacts</span></h6>\r" +
    "\n" +
    "                                    <h5>\r" +
    "\n" +
    "                                        <span id=\"lblContacts\">{{item.RefrenceMobileNumberWithcode+(item.RefrenceLandNumberwithCode!=null&&item.RefrenceLandNumberwithCode!=\"\"?\"&\"+item.RefrenceLandNumberwithCode:\"\") }}</span></h5>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div id=\"uplEmail\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                                    <h6>\r" +
    "\n" +
    "                                        <span id=\"Email\" style=\"font-weight:bold;\">Email</span></h6>\r" +
    "\n" +
    "                                    <h5>\r" +
    "\n" +
    "                                        <span id=\"lblEmail\">{{item.RefrenceEmail }}</span></h5>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div id=\"uplNarration\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <span id=\"Narration\" style=\"font-weight:bold;\">Narration</span></h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblNarration\">{{item.RefrenceNarration }}</span></h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <hr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <script type=\"text/ng-template\" id=\"referenceContent.html\">\r" +
    "\n" +
    "        <form name=\"refForm\" novalidate role=\"form\" ng-submit=\"refenceSubmit(refObj)\" accessible-form>\r" +
    "\n" +
    "            <div class=\"modal-header\">\r" +
    "\n" +
    "                <h3 class=\"modal-title text-center\">Reference Details\r" +
    "\n" +
    "                    <a href=\"javascript:void(0);\" ng-click=\"cancel();\">\r" +
    "\n" +
    "                        <ng-md-icon icon=\"close\" style=\"fill:#665454\" class=\"pull-right\" size=\"25\">Delete</ng-md-icon>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </h3>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"modal-body clearfix pop_content_my\" id=\"modal-body\">\r" +
    "\n" +
    "                <ul>\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                        <label for=\"Relationshiptype\" class=\"pop_label_left\">Relationship type<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                        <div class=\"pop_controls_right select-box-my input-group\">\r" +
    "\n" +
    "                            <select multiselectdropdown ng-model=\"refObj.ddlRelationshiptype\" typeofdata=\"RelationshipType\" required></select>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                        <label for=\"Firstname\" class=\"pop_label_left\">First name<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                        <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                            <input ng-model=\"refObj.txtFname\" class=\"form-control\" tabindex=\"2\" maxlength=\"100\" required/>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                        <label for=\"Lastname\" class=\"pop_label_left\">Last name<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                        <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                            <input ng-model=\"refObj.txtLname\" class=\"form-control\" tabindex=\"3\" maxlength=\"50\" required/>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                        <label for=\"Professiondetails\" class=\"pop_label_left\">Profession</label>\r" +
    "\n" +
    "                        <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                            <input ng-model=\"refObj.txtProfessiondetails\" class=\"form-control\" tabindex=\"4\" maxlength=\"200\" />\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <country-directive countryshow=\"true\" cityshow=\"false\" othercity=\"false\" dcountry=\"refObj.ddlCountry\" dstate=\"refObj.ddlState\" ddistrict=\"refObj.ddlDistrict\"></country-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                        <label for=\"NativePlace\" class=\"pop_label_left\">Native Place</label>\r" +
    "\n" +
    "                        <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                            <input ng-model=\"refObj.txtNativePlace\" class=\"form-control\" tabindex=\"8\" maxlength=\"100\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                        <label for=\"lblPresentlocation\" class=\"pop_label_left\">Present location </label>\r" +
    "\n" +
    "                        <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                            <input ng-model=\"refObj.txtPresentlocation\" class=\"form-control\" tabindex=\"9\" maxlength=\"100\" />\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <contact-directive emailhide=\"true\" dmobile=\"refObj.ddlMobileCountryID\" strmobile=\"refObj.txtMobileNumber\" dalternative=\"refObj.ddlMobileCountryID2\" stralternative=\"refObj.txtMobileNumber2\" dland=\"refObj.ddlLandLineCountryID\" strareacode=\"refObj.txtAreCode\"\r" +
    "\n" +
    "                        strland=\"refObj.txtLandNumber\" strmail=\"refObj.txtEmails\"></contact-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                        <label for=\"lblNarration\" class=\"pop_label_left\">Narration</label>\r" +
    "\n" +
    "                        <div class=\"\">\r" +
    "\n" +
    "                            <textarea ng-model=\"refObj.txtNarrations\" class=\"form-control\" textmode=\"MultiLine\" tabindex=\"21\" rows=\"4\" width=\"515\" maxlength=\"500\" onkeydown=\"return CharacterCount()\" onkeyup=\"return CharacterCount()\"></textarea>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <label style=\"color: #1e1c1c; font-size: 13px;\"></label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"row \">\r" +
    "\n" +
    "                        <!--<div class=\"col-lg-9\">\r" +
    "\n" +
    "                            <input value=\"Submit\" class=\"button_custom  pull-right\" type=\"submit\">\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-lg-3\">\r" +
    "\n" +
    "                            <input value=\"Cancel\" class=\"button_custom button_custom_reset pull-right\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "                        </div>-->\r" +
    "\n" +
    "                        <edit-footer></edit-footer>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "    </script>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<style>\r" +
    "\n" +
    "    .md-dialog-container {\r" +
    "\n" +
    "        z-index: 99999999999;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .reviewCls {\r" +
    "\n" +
    "        background-image: url(src/images/img_kaaka_Seal_b.png);\r" +
    "\n" +
    "        background-repeat: no-repeat;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "</style>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<alert-directive></alert-directive>"
  );


  $templateCache.put('editview/app/views/editRelativeDetails.html',
    "<div class=\"edit_pages_content_main clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"edit_page_item\">\r" +
    "\n" +
    "        <div class=\"edit_page_item_head clearfix\">\r" +
    "\n" +
    "            <h4>Father's Brother Details\r" +
    "\n" +
    "            </h4>\r" +
    "\n" +
    "            <div class=\"edit_page_item_ui clearfix\" ng-if=\"FBArr.length===0\">\r" +
    "\n" +
    "                <a href=\"javascript:void(0);\" ng-click=\"relativePopulatePopulate('FB');\" class=\"edit_page_add_button\" tabindex=\"0\">Add</a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"edit_page_details_item\">\r" +
    "\n" +
    "            <div id=\"fullupdatefatherbrother\" ng-repeat=\"item in FBArr\">\r" +
    "\n" +
    "                <div id=\"reviewdiv\" ng-class=\"item.reviewstatus===false?'edit_page_details_item_desc clearfix reviewCls':'edit_page_details_item_desc clearfix'\">\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <div id=\"upFatherBrother\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"FBName\" style=\"font-weight:bold;\">FB Name</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblFBName\">{{item.FatherbrotherName+\"(\"+item.FatherBrotherElderyounger+\")\"}}</span></h5>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div ng-if=\"FBArr.length>0\" class=\"edit_page_item_ui clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <a href=\"javascript:void(0);\" ng-click=\"relativePopulatePopulate('FB',item);\" class=\"edit_page_edit_button\" href=\"javascript:void(0);\">Edit</a>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"UpdatePanelFBProfession\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"FBEducation\" style=\"font-weight:bold;\">Education</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblFBEducation\">{{item.FatherBrotherEducationDetails}}</span></h5>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"UpdatePanelFBProfessionDetails\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"FBProfessionDetails\" style=\"font-weight:bold;\">Profession</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblProfessionDetails\">{{item.FatherbrotherProfessionDetails }}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div id=\"UpdatePanelFBCurrentLocation\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"FBCurrentLocation\" style=\"font-weight:bold;\">Current Location</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblCurrentLocation\">{{item.FatherbrotherCurrentLocation }}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"update0\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div id=\"ownerdiv0\">\r" +
    "\n" +
    "                                <div id=\"UpdatePanelFBcontacts\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <h6>\r" +
    "\n" +
    "                                            <span id=\"FBcontacts\" style=\"font-weight:bold;\">FB contacts</span></h6>\r" +
    "\n" +
    "                                        <h5>\r" +
    "\n" +
    "                                            <span id=\"lblFBcontacts\">{{item.FatherbrotherMobileNumberWithCode+\" \"\r" +
    "\n" +
    "                                        +(item.FatherbrotherLandnumberwithcode!=null&&item.FatherbrotherLandnumberwithcode.ToString()!=\"\"?\"&\"+\r" +
    "\n" +
    "                                        item.FatherbrotherLandnumberwithcode:\" \") }}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div id=\"UpdatePanelFBEmail\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <h6>\r" +
    "\n" +
    "                                            <span id=\"FBEmail\" style=\"font-weight:bold;\">FB Email</span></h6>\r" +
    "\n" +
    "                                        <h5>\r" +
    "\n" +
    "                                            <span id=\"lblFBEmail\">{{item.FatherbrotherEmail }}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"edit_page_item\">\r" +
    "\n" +
    "        <div class=\"edit_page_item_head clearfix\">\r" +
    "\n" +
    "            <h4>Father's Sister Details\r" +
    "\n" +
    "            </h4>\r" +
    "\n" +
    "            <div class=\"edit_page_item_ui clearfix\" ng-if=\"FSArr.length===0\">\r" +
    "\n" +
    "                <a class=\"edit_page_add_button\" href=\"javascript:void(0);\" ng-click=\"relativePopulatePopulate('FS');\" tabindex=\"0\">Add</a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"edit_page_details_item\">\r" +
    "\n" +
    "            <div id=\"fullupdatefathersister\" ng-repeat=\"item in FSArr\">\r" +
    "\n" +
    "                <div id=\"reviewdiv\" ng-class=\"item.reviewstatus===false?'edit_page_details_item_desc clearfix reviewCls':'edit_page_details_item_desc clearfix'\">\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <div id=\"upFathersister\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"FsName\" style=\"font-weight:bold;\">FsName</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblFsName\">{{item.FatherSisterName+\"(\"+item.FatherSisterElderyounger+\")\" }}</span>\r" +
    "\n" +
    "                                </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div ng-if=\"FSArr.length>0\" class=\"edit_page_item_ui clearfix\">\r" +
    "\n" +
    "                                <a ng-click=\"relativePopulatePopulate('FS',item);\" class=\"edit_page_edit_button\" href=\"javascript:void(0);\">Edit</a>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"UpdatePanelFshName\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"FshName\" style=\"font-weight:bold;\">Fsh Name</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblFshName\">{{item.FatherSisterSpouseName }}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"UpdatePanelFshEducation\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"lblEducationfsh\" style=\"font-weight:bold;\">Fsh Education</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblFshEducation\">{{item.FatherSisterSpouseEducationDetails }}</span></h5>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"UpdatePanelFshprofessiondetails\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"Fshprofessiondetails\" style=\"font-weight:bold;\">Fsh Profession</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblFshprofessiondetails\">{{item.FathersisterSpouseProfessionDetails }}</span></h5>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div id=\"UpdatePanelFshCurrentLocation\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"FshCurrentLocation\" style=\"font-weight:bold;\">Fsh Current Location</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblFshCurrentLocation\">{{item.FatherSisterCurrentLocation }}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"UpdatePanelFshNativeplace\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"FshNativeplace\" style=\"font-weight:bold;\">Fsh Native Place</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblFshNativeplace\">{{item.FathersisterSpouseNativePlace+\" \"+(item.FatherSisterSpousDistrict!=null && \r" +
    "\n" +
    "                                                item.FatherSisterSpousDistrict.ToString()!=\"\"? \",\"+item.FatherSisterSpousDistrict:\"\")+\" \"+(item.FatherSisterSpousestate!=null && \r" +
    "\n" +
    "                                                item.FatherSisterSpousestate.ToString()!=\"\"? \",\"+item.FatherSisterSpousestate:\"\")+\" \"+(item.FatherSisterSpousecountry!=null && \r" +
    "\n" +
    "                                                item.FatherSisterSpousecountry.ToString()!=\"\"? \",\"+item.FatherSisterSpousecountry:\"\")  }}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"update1\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div id=\"ownerdiv1\">\r" +
    "\n" +
    "                                <div id=\"UpdatePanelFShcontactnos\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <h6>\r" +
    "\n" +
    "                                            <span id=\"FShcontactnos\" style=\"font-weight:bold;\">FSh contact nos</span></h6>\r" +
    "\n" +
    "                                        <h5>\r" +
    "\n" +
    "                                            <span id=\"lblFSHcontacts\">{{item.FatherSisterspouseMobileNumberWithCode+\" \"+(item.FatherSisterspouseLandnumberwithcode!=null&&\r" +
    "\n" +
    "                                    item.FatherSisterspouseLandnumberwithcode.ToString()!=\"\"?\"&\"+item.FatherSisterspouseLandnumberwithcode:\"\") }}</span></h5>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div id=\"UpdatePanelFSHEmail\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <h6>\r" +
    "\n" +
    "                                            <span id=\"FSHEmail\" style=\"font-weight:bold;\">Fsh Email</span></h6>\r" +
    "\n" +
    "                                        <h5>\r" +
    "\n" +
    "                                            <span id=\"lblFSHEmail\">{{item.FatherSisterspouseEmail }}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"edit_page_item\">\r" +
    "\n" +
    "        <div class=\"edit_page_item_head clearfix\">\r" +
    "\n" +
    "            <h4>Mother's Brother Details</h4>\r" +
    "\n" +
    "            <div class=\"edit_page_item_ui clearfix\" ng-if=\"MBrr.length===0\">\r" +
    "\n" +
    "                <a class=\"edit_page_add_button\" href=\"javascript:void(0);\" ng-click=\"relativePopulatePopulate('MB');\" tabindex=\"0\">Add</a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"edit_page_details_item\">\r" +
    "\n" +
    "            <div id=\"fullupdatemotherbrother\" ng-repeat=\"item in MBrr\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div id=\"reviewdiv\" ng-class=\"item.reviewstatus===false?'edit_page_details_item_desc clearfix reviewCls':'edit_page_details_item_desc clearfix'\">\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <div id=\"upmotherbrother\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"MBName\" style=\"font-weight:bold;\">MB Name</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblMBName\">{{item.MotherBrotherName+\"(\"+item.MotherBrotherElderyounger+\")\" }}</span>\r" +
    "\n" +
    "                                </h5>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div ng-if=\"MBrr.length>0\" class=\"edit_page_item_ui clearfix\">\r" +
    "\n" +
    "                                <a href=\"javascript:void(0);\" ng-click=\"relativePopulatePopulate('MB',item);\" class=\"edit_page_edit_button\">Edit</a>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <h6>\r" +
    "\n" +
    "                                        <span id=\"lblMotherbrithereducation\" style=\"font-weight:bold;\">Education</span></h6>\r" +
    "\n" +
    "                                    <h5>\r" +
    "\n" +
    "                                        <span id=\"lblMotherbrithereducationdetails\">{{item.MotherBrotherEducationDetails }}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <h6>\r" +
    "\n" +
    "                                        <span id=\"MBProfessionDetails\" style=\"font-weight:bold;\">Profession</span></h6>\r" +
    "\n" +
    "                                    <h5>\r" +
    "\n" +
    "                                        <span id=\"lblMBProfessionDetails\">{{item.MotherBrotherProfessionDetails }}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <h6>\r" +
    "\n" +
    "                                        <span id=\"MBCurrentLocation\" style=\"font-weight:bold;\">Current Location</span></h6>\r" +
    "\n" +
    "                                    <h5>\r" +
    "\n" +
    "                                        <span id=\"lblMBCurrentLocation\">{{item.MotherBrotherCurrentLocation }}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div id=\"update2\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div id=\"ownerdiv2\">\r" +
    "\n" +
    "                                    <div id=\"UpdatePanelMBcontacts\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <h6>\r" +
    "\n" +
    "                                                <span id=\"MBcontacts\" style=\"font-weight:bold;\">MB contacts</span></h6>\r" +
    "\n" +
    "                                            <h5>\r" +
    "\n" +
    "                                                <span id=\"lblMBcontacts\">{{item.MotherBrotherMobileNumberWithCode+\" \"+(item.MotherBrotherLandnumberwithcode!=null&& \r" +
    "\n" +
    "                                                    item.MotherBrotherLandnumberwithcode.ToString()!=\"\"?\"&\"+item.MotherBrotherLandnumberwithcode:\"\") }}</span></h5>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div id=\"UpdatePanelMBEmail\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <h6>\r" +
    "\n" +
    "                                                <span id=\"MBEmail\" style=\"font-weight:bold;\">MB Email</span></h6>\r" +
    "\n" +
    "                                            <h5>\r" +
    "\n" +
    "                                                <span id=\"lblMBEmail\">{{item.MotherBrotherEmail }}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"edit_page_item\">\r" +
    "\n" +
    "        <div class=\"edit_page_item_head clearfix\">\r" +
    "\n" +
    "            <h4>Mother's Sister Details\r" +
    "\n" +
    "            </h4>\r" +
    "\n" +
    "            <div class=\"edit_page_item_ui clearfix\" ng-if=\"MSArr.length===0\">\r" +
    "\n" +
    "                <a class=\"edit_page_add_button\" href=\"javascript:void(0);\" ng-click=\"relativePopulatePopulate('MS');\" tabindex=\"0\">Add</a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"edit_page_details_item\">\r" +
    "\n" +
    "            <div id=\"fullupdatemothersister\" ng-repeat=\"item in MSArr\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div id=\"reviewdiv\" ng-class=\"item.reviewstatus===false?'edit_page_details_item_desc clearfix reviewCls':'edit_page_details_item_desc clearfix'\">\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <div id=\"upMothersister\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <span id=\"MsName\" style=\"font-weight:bold;\">MsName</span></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblMsName\">{{item.MotherSisterName+\"(\"+item.MotherSisterElderyounger+\")\" }}</span>\r" +
    "\n" +
    "                                </h5>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div ng-if=\"MSArr.length>0\" class=\"edit_page_item_ui clearfix\">\r" +
    "\n" +
    "                                <a href=\"javascript:void(0);\" ng-click=\"relativePopulatePopulate('MS',item);\" class=\"edit_page_edit_button\">Edit</a>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <span id=\"MshName\" style=\"font-weight:bold;\">Msh Name</span></h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblMshName\">{{item.MotherSisterSpouseName}}</span></h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <span id=\"lblMshEducation\" style=\"font-weight:bold;\">Msh Education</span></h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblMshEducationdetails\">{{item.MothersisterspouseEducationdetails }}</span></h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <span style=\"font-weight:bold;\">Msh profession</span></h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span>{{item.MotherSisterProfessionDetails }}</span></h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div id=\"UpdatePanelMshCurrentLocation\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <span id=\"MshCurrentLocation\" style=\"font-weight:bold;\">Msh Current Location</span></h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblMshCurrentLocation\">{{item.MotherSisterCurrentLocation }}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div id=\"UpdatePanelMshNativeplace\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <span id=\"MshNativeplace\" style=\"font-weight:bold;\">Msh Native Place</span></h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblMshNativeplace\">{{item.MotherSisterSpouseNativePlace+\" \"+(item.Mothersisterspousedistrict!=null && \r" +
    "\n" +
    "                                                item.Mothersisterspousedistrict.ToString()!=\"\"? \",\"+item.Mothersisterspousedistrict:\"\")+\" \"+(item.Motherssisterspousestate!=null && \r" +
    "\n" +
    "                                                item.Motherssisterspousestate.ToString()!=\"\"? \",\"+item.Motherssisterspousestate:\"\")+\" \"+(item.MothersisterspouseCountry!=null && \r" +
    "\n" +
    "                                                item.MothersisterspouseCountry.ToString()!=\"\"? \",\"+item.MothersisterspouseCountry:\"\")  }}    </span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div id=\"update3\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div id=\"ownerdiv3\">\r" +
    "\n" +
    "                            <div id=\"UpdatePanelMshcontactnos\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <h6>\r" +
    "\n" +
    "                                        <span id=\"Mshcontactnos\" style=\"font-weight:bold;\">Msh contact nos</span></h6>\r" +
    "\n" +
    "                                    <h5>\r" +
    "\n" +
    "                                        <span id=\"lblMshcontactnos\">{{item.MotherSisterspouseMobileNumberWithCode+\" \"+(item.MotherSisterspouseLandnumberwithcode!=null \r" +
    "\n" +
    "                                            && item.MotherSisterspouseLandnumberwithcode.ToString()!=\"\" ?\r" +
    "\n" +
    "                                            \"&\"+item.MotherSisterspouseLandnumberwithcode:\"\") }}</span></h5>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div id=\"UpdatePanelMsHEmail\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <h6>\r" +
    "\n" +
    "                                        <span id=\"MsHEmail\" style=\"font-weight:bold;\">Msh Email</span></h6>\r" +
    "\n" +
    "                                    <h5>\r" +
    "\n" +
    "                                        <span id=\"lblMsHEmail\">{{item.MotherSisterspouseEmail }}</span></h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"FBModalContent.html\">\r" +
    "\n" +
    "    <form name=\"FBForm\" novalidate role=\"form\" ng-submit=\"FBForm.$valid  && FBSubmit(fbObj)\">\r" +
    "\n" +
    "        <div class=\"modal-header\">\r" +
    "\n" +
    "            <h3 class=\"modal-title text-center\" id=\"modal-title\">Father's Brother Details\r" +
    "\n" +
    "                <a href=\"javascript:void(0);\" ng-click=\"cancel();\">\r" +
    "\n" +
    "                    <ng-md-icon icon=\"close\" style=\"fill:#c73e5f\" class=\"pull-right\" size=\"20\">Delete</ng-md-icon>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-body clearfix pop_content_my\" id=\"modal-body\">\r" +
    "\n" +
    "            <ul id=\"ulFatherBrother\">\r" +
    "\n" +
    "                <li class=\"clearfix\">\r" +
    "\n" +
    "                    <label for=\"ElderYounger\" style=\"padding-top: 2%;\" class=\"pop_label_left\">Elder/Younger<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <md-input-container style=\"font-weight: 700;color:black;\">\r" +
    "\n" +
    "                        <md-radio-group ng-required=\"true\" name=\"rdlFBElderORyounger\" layout=\"row\" ng-model=\"fbObj.rdlFBElderORyounger\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                            <md-radio-button value=\"324\" class=\"md-primary\">Elder</md-radio-button>\r" +
    "\n" +
    "                            <md-radio-button value=\"323\"> Younger </md-radio-button>\r" +
    "\n" +
    "                        </md-radio-group>\r" +
    "\n" +
    "                        <div ng-messages=\"FBForm.rdlFBElderORyounger.$invalid\">\r" +
    "\n" +
    "                            <div ng-if=\"FBForm.rdlFBElderORyounger.$invalid && (FBForm.$submitted)\">This field is required.</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </md-input-container>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"Fatherbrothername\" class=\"pop_label_left\">Father's brother name<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <input ng-model=\"fbObj.txtFatherbrothername\" class=\"form-control\" maxlength=\"100\" tabindex=\"2\" required/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"Educationdetails\" class=\"pop_label_left\">Education</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <input ng-model=\"fbObj.txtFBEducationdetails\" class=\"form-control\" tabindex=\"3\" maxlength=\"150\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"Professiondetails\" class=\"pop_label_left\">Profession</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <input ng-model=\"fbObj.txtFBProfessiondetails\" class=\"form-control\" tabindex=\"4\" maxlength=\"200\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <contact-directive emailhide=\"true\" dmobile=\"fbObj.ddlFBMobileCountryID\" strmobile=\"fbObj.txtFBMobileNumber\" dalternative=\"fbObj.ddlFBMobileCountryID2\" stralternative=\"fbObj.txtFBMobileNumber2\" dland=\"fbObj.ddlFBLandLineCountry\" strareacode=\"fbObj.txtFBAreCode\"\r" +
    "\n" +
    "                    strland=\"fbObj.txtFBLandNumber\" strmail=\"fbObj.txtFBEmails\"></contact-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblCurrentLocation\" class=\"pop_label_left\">Current Location</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <input ng-model=\"fbObj.txtCurrentLocation\" class=\"form-control\" maxlength=\"150\" tabindex=\"16\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"row \">\r" +
    "\n" +
    "                    <!--<div class=\"col-lg-9\">\r" +
    "\n" +
    "                        <input value=\"Submit\" class=\"button_custom  pull-right\" type=\"submit\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-lg-3\">\r" +
    "\n" +
    "                        <input value=\"Cancel\" class=\"button_custom button_custom_reset pull-right\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "                    </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <edit-footer></edit-footer>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"FSModalContent.html\">\r" +
    "\n" +
    "    <form name=\"FSForm\" novalidate role=\"form\" ng-submit=\"FSForm.$valid  && FSSubmit(fsObj)\">\r" +
    "\n" +
    "        <div class=\"modal-header\">\r" +
    "\n" +
    "            <h3 class=\"modal-title text-center\" id=\"modal-title\">Father's Sister Details\r" +
    "\n" +
    "                <a href=\"javascript:void(0);\" ng-click=\"cancel();\">\r" +
    "\n" +
    "                    <ng-md-icon icon=\"close\" style=\"fill:#c73e5f\" class=\"pull-right\" size=\"20\">Delete</ng-md-icon>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-body clearfix pop_content_my\" id=\"modal-body\">\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li class=\"clearfix\">\r" +
    "\n" +
    "                    <label for=\"FSElderYounger\" style=\"padding-top: 2%;\" class=\"pop_label_left\">Elder/Younger<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                    <!--<div class=\"pop_controls_right pop_radios_list\">\r" +
    "\n" +
    "                        <label>\r" +
    "\n" +
    "                <input ng-model=\"fsObj.rdlFSElderYounger\" value=\"326\" type=\"radio\"><span>&nbsp;Elder</span>\r" +
    "\n" +
    "            </label>\r" +
    "\n" +
    "                        <label class=\"\">\r" +
    "\n" +
    "                <input ng-model=\"fsObj.rdlFSElderYounger\" value=\"325\" type=\"radio\"><span>&nbsp;Younger</span>\r" +
    "\n" +
    "            </label>\r" +
    "\n" +
    "                    </div>-->\r" +
    "\n" +
    "                    <md-input-container style=\"font-weight: 700;color:black;\">\r" +
    "\n" +
    "                        <md-radio-group ng-required=\"true\" name=\"rdlFSElderYounger\" layout=\"row\" ng-model=\"fsObj.rdlFSElderYounger\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                            <md-radio-button value=\"326\" class=\"md-primary\">Elder</md-radio-button>\r" +
    "\n" +
    "                            <md-radio-button value=\"325\"> Younger </md-radio-button>\r" +
    "\n" +
    "                        </md-radio-group>\r" +
    "\n" +
    "                        <div ng-messages=\"FSForm.rdlFSElderYounger.$invalid\">\r" +
    "\n" +
    "                            <div ng-if=\"FSForm.rdlFSElderYounger.$invalid && (FSForm.$submitted)\">This field is required.</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"Fathersistername\" class=\"pop_label_left\">Father's sister name<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <input ng-model=\"fsObj.txtFathersistername\" class=\"form-control\" maxlength=\"100\" tabindex=\"2\" required/>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"Husbandfirstname\" class=\"pop_label_left\">Husband first name</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <input ng-model=\"fsObj.txtFSHusbandfirstname\" class=\"form-control\" maxlength=\"100\" tabindex=\"3\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"Husbandlastname\" class=\"pop_label_left\">Husband last name </label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <input ng-model=\"fsObj.txtFSHusbandlastname\" class=\"form-control\" maxlength=\"50\" tabindex=\"4\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"FSHEDucation\" class=\"pop_label_left\">FSH Education</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <input ng-model=\"fsObj.txtFSHEDucation\" class=\"form-control\" tabindex=\"5\" maxlength=\"150\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"Professiondetails\" class=\"pop_label_left\">FSH Profession</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <input ng-model=\"fsObj.txtFSProfessiondetails\" class=\"form-control\" tabindex=\"6\" maxlength=\"200\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <country-directive countryshow=\"false\" dcountry=\"'1'\" cityshow=\"false\" othercity=\"false\" dstate=\"fsObj.ddlFSHStateID\" ddistrict=\"fsObj.ddlFSHDistrictID\"></country-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"FSHNativePlace\" class=\"pop_label_left\">Native place </label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <input ng-model=\"fsObj.txtFSHNativePlace\" class=\"form-control\" tabindex=\"9\" maxlength=\"100\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <contact-directive emailhide=\"true\" dmobile=\"fsObj.ddlFSMObileCountryID\" strmobile=\"fsObj.txtFSMobileNumber\" dalternative=\"fsObj.ddlFSMObileCountryID2\" stralternative=\"fsObj.txtFSMobileNumber2\" dland=\"fsObj.ddlFSHLandCountryID\" strareacode=\"fsObj.txtFSHAreaNumber\"\r" +
    "\n" +
    "                    strland=\"fsObj.txtFSHNUmber\" strmail=\"fsObj.txtFSHEmails\"></contact-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblCurrentLocation\" class=\"pop_label_left\">Current Location</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <input ng-model=\"fsObj.txtFSHCurrentLocation\" class=\"form-control\" tabindex=\"21\" maxlength=\"100\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"row \">\r" +
    "\n" +
    "                    <!--<div class=\"col-lg-9\">\r" +
    "\n" +
    "                        <input value=\"Submit\" class=\"button_custom  pull-right\" type=\"submit\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-lg-3\">\r" +
    "\n" +
    "                        <input value=\"Cancel\" class=\"button_custom button_custom_reset pull-right\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "                    </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <edit-footer></edit-footer>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"MBModalContent.html\">\r" +
    "\n" +
    "    <form name=\"MBForm\" novalidate role=\"form\" ng-submit=\"MBForm.$valid  && MBSubmit(mbObj)\">\r" +
    "\n" +
    "        <div class=\"modal-header\">\r" +
    "\n" +
    "            <h3 class=\"modal-title text-center\" id=\"modal-title\">Mother's Brother Details\r" +
    "\n" +
    "                <a href=\"javascript:void(0);\" ng-click=\"cancel();\">\r" +
    "\n" +
    "                    <ng-md-icon icon=\"close\" style=\"fill:#c73e5f\" class=\"pull-right\" size=\"20\">Delete</ng-md-icon>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-body clearfix pop_content_my\" id=\"modal-body\">\r" +
    "\n" +
    "            <ul id=\"ulmotherbrother\">\r" +
    "\n" +
    "                <li class=\"clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <label for=\"MotherElderYounger\" style=\"padding-top: 2%;\" class=\"pop_label_left\">Elder/Younger<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                    <!--<div class=\"pop_controls_right pop_radios_list\">\r" +
    "\n" +
    "                        <label>\r" +
    "\n" +
    "                <input ng-model=\"mbObj.rdlMBElderYounger\" value=\"328\" type=\"radio\"><span>&nbsp;Elder</span>\r" +
    "\n" +
    "            </label>\r" +
    "\n" +
    "                        <label class=\"\">\r" +
    "\n" +
    "                <input ng-model=\"mbObj.rdlMBElderYounger\" value=\"327\" type=\"radio\"><span>&nbsp;Younger</span>\r" +
    "\n" +
    "            </label>\r" +
    "\n" +
    "                    </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <md-input-container style=\"font-weight: 700;color:black;\">\r" +
    "\n" +
    "                        <md-radio-group ng-required=\"true\" name=\"rdlMBElderYounger\" layout=\"row\" ng-model=\"mbObj.rdlMBElderYounger\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                            <md-radio-button value=\"328\" class=\"md-primary\">Elder</md-radio-button>\r" +
    "\n" +
    "                            <md-radio-button value=\"327\"> Younger </md-radio-button>\r" +
    "\n" +
    "                        </md-radio-group>\r" +
    "\n" +
    "                        <div ng-messages=\"MBForm.rdlMBElderYounger.$invalid\">\r" +
    "\n" +
    "                            <div ng-if=\"MBForm.rdlMBElderYounger.$invalid && (MBForm.$submitted)\">This field is required.</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"Motherbrothername\" class=\"pop_label_left\">Mother's brother name<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                        <input ng-model=\"mbObj.txtMBName\" class=\"form-control\" maxlength=\"100\" tabindex=\"2\" required/>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"MBEducation\" class=\"pop_label_left\">Education</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                        <input ng-model=\"mbObj.txtMBEducation\" class=\"form-control\" tabindex=\"3\" maxlength=\"150\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"MBProfessiondetails\" class=\"pop_label_left\">Profession</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <input ng-model=\"mbObj.txtMBProfessiondetails\" class=\"form-control\" tabindex=\"4\" maxlength=\"200\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <contact-directive emailhide=\"true\" dmobile=\"mbObj.ddlMBCountriCode\" strmobile=\"mbObj.txtMBMobileNum\" dalternative=\"mbObj.ddlMBCountriCode2\" stralternative=\"mbObj.txtMBMobileNum2\" dland=\"mbObj.ddlMBLandLineCountryCode\" strareacode=\"mbObj.txtMBAreaCode\"\r" +
    "\n" +
    "                    strland=\"mbObj.txtMBLandLineNum\" strmail=\"mbObj.txtMBEmails\"></contact-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"MBCurrentLocation\" class=\"pop_label_left\">Current Location</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                        <input ng-model=\"mbObj.txtMBCurrentLocation\" class=\"form-control\" tabindex=\"16\" maxlength=\"100\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"row \">\r" +
    "\n" +
    "                    <!--<div class=\"col-lg-9\">\r" +
    "\n" +
    "                        <input value=\"Submit\" class=\"button_custom  pull-right\" type=\"submit\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-lg-3\">\r" +
    "\n" +
    "                        <input value=\"Cancel\" class=\"button_custom button_custom_reset pull-right\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "                    </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <edit-footer></edit-footer>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"MSModalContent.html\">\r" +
    "\n" +
    "    <form name=\"MSForm\" novalidate role=\"form\" ng-submit=\"MSForm.$valid  && MSSubmit(msObj)\">\r" +
    "\n" +
    "        <div class=\"modal-header\">\r" +
    "\n" +
    "            <h3 class=\"modal-title text-center\" id=\"modal-title\">Mother's Sister Details\r" +
    "\n" +
    "                <a href=\"javascript:void(0);\" ng-click=\"cancel();\">\r" +
    "\n" +
    "                    <ng-md-icon icon=\"close\" style=\"fill:#c73e5f\" class=\"pull-right\" size=\"20\">Delete</ng-md-icon>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-body clearfix pop_content_my\" id=\"modal-body\">\r" +
    "\n" +
    "            <ul id=\"ulmothersister\">\r" +
    "\n" +
    "                <li class=\"clearfix\">\r" +
    "\n" +
    "                    <label for=\"MsElderYounger\" style=\"padding-top: 2%;\" class=\"pop_label_left\">Elder/Younger<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <md-input-container style=\"font-weight: 700;color:black;\">\r" +
    "\n" +
    "                        <md-radio-group ng-required=\"true\" name=\"rdlMSElderYounger\" layout=\"row\" ng-model=\"msObj.rdlMSElderYounger\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                            <md-radio-button value=\"330\" class=\"md-primary\">Elder</md-radio-button>\r" +
    "\n" +
    "                            <md-radio-button value=\"329\"> Younger </md-radio-button>\r" +
    "\n" +
    "                        </md-radio-group>\r" +
    "\n" +
    "                        <div ng-messages=\"MSForm.rdlMSElderYounger.$invalid\">\r" +
    "\n" +
    "                            <div ng-if=\"MSForm.rdlMSElderYounger.$invalid && (MSForm.$submitted)\">This field is required.</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </md-input-container>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"Fathersistername\" class=\"pop_label_left\">Mother's sister name<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                        <input ng-model=\"msObj.txtMSName\" class=\"form-control\" maxlength=\"100\" tabindex=\"2\" required/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"MsHusbandfirstname\" class=\"pop_label_left\">Husband first name</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <input ng-model=\"msObj.txtMsHusbandfirstname\" class=\"form-control\" maxlength=\"100\" tabindex=\"3\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"MsHusbandlastname\" class=\"pop_label_left\">Husband last name </label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <input ng-model=\"msObj.txtMsHusbandlastname\" class=\"form-control\" maxlength=\"50\" tabindex=\"4\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <country-directive countryshow=\"false\" dcountry=\"'1'\" cityshow=\"false\" othercity=\"false\" dstate=\"msObj.ddlMSisState\" ddistrict=\"msObj.ddlMsDistrict\"></country-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"MSHNativePlace\" class=\"pop_label_left\">Native place </label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                        <input ng-model=\"msObj.txtMSNativePlace\" class=\"form-control\" tabindex=\"7\" maxlength=\"100\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"MSHEducationdet\" class=\"pop_label_left\">Education</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <input ng-model=\"msObj.txtMSHEducation\" class=\"form-control\" tabindex=\"8\" maxlength=\"150\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"MSProfessiondetails\" class=\"pop_label_left\">Profession</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <input ng-model=\"msObj.txtMSProfessiondetails\" class=\"form-control\" tabindex=\"9\" maxlength=\"200\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <contact-directive emailhide=\"true\" dmobile=\"msObj.ddlMSCounCodeID\" strmobile=\"msObj.txtMSMObileNum\" dalternative=\"msObj.ddlMSCounCodeID2\" stralternative=\"msObj.txtMSMObileNum2\" dland=\"msObj.ddlMSLLCounCode\" strareacode=\"msObj.txtMSArea\" strland=\"msObj.txtLLNum\"\r" +
    "\n" +
    "                    strmail=\"msObj.txtMSEmail\"></contact-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblMSCurrentLocation\" class=\"pop_label_left\">Current Location</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                        <input ng-model=\"msObj.txtMSCurrentLocation\" class=\"form-control\" maxlength=\"100\" tabindex=\"21\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"row \">\r" +
    "\n" +
    "                    <!--<div class=\"col-lg-9\">\r" +
    "\n" +
    "                        <input value=\"Submit\" class=\"button_custom  pull-right\" type=\"submit\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-lg-3\">\r" +
    "\n" +
    "                        <input value=\"Cancel\" class=\"button_custom button_custom_reset pull-right\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "                    </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <edit-footer></edit-footer>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "<alert-directive></alert-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<style>\r" +
    "\n" +
    "    .md-dialog-container {\r" +
    "\n" +
    "        z-index: 99999999999;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "</style>"
  );


  $templateCache.put('editview/app/views/editSibblingDetails.html',
    "<div class=\"edit_pages_content_main clearfix\">\r" +
    "\n" +
    "    <div class=\"edit_page_item\">\r" +
    "\n" +
    "        <div class=\"edit_page_item_head clearfix\">\r" +
    "\n" +
    "            <h4>Sibling Details\r" +
    "\n" +
    "            </h4>\r" +
    "\n" +
    "            <div class=\"edit_page_item_ui clearfix\" ng-if=\"sibblingCountArr.length===0\">\r" +
    "\n" +
    "                <a href=\"javascript:void(0);\" ng-click=\"sibblingPopulatePopulate('sibCounrt')\" class=\"edit_page_add_button\">Add</a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div id=\"upnoofSibblings\" class=\"edit_page_details_item\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div id=\"lstnoofbros\">\r" +
    "\n" +
    "                <div ng-class=\"item.reviewstatus===false?'edit_page_details_item_desc clearfix reviewCls':'edit_page_details_item_desc clearfix'\" ng-repeat=\"item in sibblingCountArr\">\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <div class=\"form-group\">\r" +
    "\n" +
    "                                <div id=\"uplNoOfBrothers\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <h6>\r" +
    "\n" +
    "                                        <label id=\"NoOfBrothers\" font-bold=\"true\">No of Brothers</label>\r" +
    "\n" +
    "                                    </h6>\r" +
    "\n" +
    "                                    <h5>\r" +
    "\n" +
    "                                        <span id=\"lblNoOfBrothers\">\r" +
    "\n" +
    "                                            {{ item.NoOfBrothers }}\r" +
    "\n" +
    "                                    </span>\r" +
    "\n" +
    "                                    </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div id=\"brotherHide\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <div ng-hide=\"item.NoOfElderBrothers===null\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <h6>\r" +
    "\n" +
    "                                            <label id=\"noofelderbrother\" font-bold=\"true\">No of elder brothers</label></h6>\r" +
    "\n" +
    "                                        <h5>\r" +
    "\n" +
    "                                            <span id=\"lblnoofelderbrother\">\r" +
    "\n" +
    "                                                {{ item.NoOfElderBrothers }}\r" +
    "\n" +
    "                                        </span>\r" +
    "\n" +
    "                                        </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div ng-hide=\"item.NoOfYoungerBrothers===null\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <h6>\r" +
    "\n" +
    "                                            <label id=\"Noofyoungerbrother\" font-bold=\"true\">No of younger brother</label>\r" +
    "\n" +
    "                                        </h6>\r" +
    "\n" +
    "                                        <h5>\r" +
    "\n" +
    "                                            <span id=\"lblnofyoungbro\">\r" +
    "\n" +
    "                                                {{ item.NoOfYoungerBrothers }}\r" +
    "\n" +
    "                                        </span>\r" +
    "\n" +
    "                                        </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"edit_page_item_ui clearfix\" ng-if=\"sibblingCountArr.length>0\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <a href=\"javascript:void(0);\" class=\"edit_page_edit_button\" ng-click=\"sibblingPopulatePopulate('sibCounrt',item)\">Edit</a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"form-group\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div ng-hide=\"item.NoOfSisters===null\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <h6>\r" +
    "\n" +
    "                                        <label font-bold=\"true\">No of sisters</label></h6>\r" +
    "\n" +
    "                                    <h5>\r" +
    "\n" +
    "                                        <span id=\"lblNoofsisters\">\r" +
    "\n" +
    "                                            {{ item.NoOfSisters }}\r" +
    "\n" +
    "                                    </span>\r" +
    "\n" +
    "                                    </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div id=\"sisterHideDiv\">\r" +
    "\n" +
    "                                    <div ng-hide=\"item.NoOfElderSisters===null\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <h6>\r" +
    "\n" +
    "                                            <label font-bold=\"true\">No of elder sisters</label></h6>\r" +
    "\n" +
    "                                        <h5>\r" +
    "\n" +
    "                                            <span id=\"lblNoofeldersisters\">\r" +
    "\n" +
    "                                                {{ item.NoOfElderSisters }}\r" +
    "\n" +
    "                                        </span>\r" +
    "\n" +
    "                                        </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div ng-hide=\"item.NoOfYoungerSisters===null\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <h6>\r" +
    "\n" +
    "                                            <label font-bold=\"true\">No of younger sisters</label></h6>\r" +
    "\n" +
    "                                        <h5>\r" +
    "\n" +
    "                                            <span>\r" +
    "\n" +
    "                                                {{ item.NoOfYoungerSisters }}\r" +
    "\n" +
    "                                        </span>\r" +
    "\n" +
    "                                        </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"edit_page_item_head clearfix\">\r" +
    "\n" +
    "            <h4>Brother\r" +
    "\n" +
    "            </h4>\r" +
    "\n" +
    "            <div class=\"edit_page_item_ui clearfix\">\r" +
    "\n" +
    "                <div id=\"uplnkbrotherdetails\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <a href=\"javascript:void(0);\" ng-click=\"sibblingPopulatePopulate('brother')\" class=\"edit_page_add_button\">Add\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div id=\"uplstSibbling\" class=\"edit_page_details_item\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div id=\"lstSibbling\" ng-repeat=\"item in BrotherArr\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div>\r" +
    "\n" +
    "                    <div id=\"Div1\" ng-class=\"item.reviewstatus===false?'edit_page_details_item_desc clearfix reviewCls':'edit_page_details_item_desc clearfix'\">\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <div id=\"uplElderbrotherName\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <h6>\r" +
    "\n" +
    "                                        <label id=\"ElderbrotherName\" font-bold=\"true\" style=\"color:red;\">\r" +
    "\n" +
    "                                        Brother Name</label></h6>\r" +
    "\n" +
    "                                    <h5>\r" +
    "\n" +
    "                                        <span id=\"lblElderbrotherName\" style=\"color:red;\">\r" +
    "\n" +
    "                                            {{ item.SibilingName+\" (\"+item.brotherYoungerORelder+\")\" }}\r" +
    "\n" +
    "                                    </span>\r" +
    "\n" +
    "                                    </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div id=\"upllnkbrodetailseb\" class=\"edit_page_item_ui clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <a class=\"edit_page_edit_button\" href=\"javascript:void(0);\" ng-click=\"sibblingPopulatePopulate('brother',item)\">Edit</a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div id=\"brothereducation\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <h6>\r" +
    "\n" +
    "                                        <label id=\"lblEducationbrother\" font-bold=\"true\">Education</label></h6>\r" +
    "\n" +
    "                                    <h5>\r" +
    "\n" +
    "                                        <span id=\"lblBrotherEducationDetails\">\r" +
    "\n" +
    "                                            {{ item.SibilingEducationDetails!=null?item.SibilingEducationDetails:''}}\r" +
    "\n" +
    "                                    </span>\r" +
    "\n" +
    "                                    </h5>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div id=\"professionbrother\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "                                    <h6>\r" +
    "\n" +
    "                                        <label id=\"Label2\" font-bold=\"true\">Profession</label></h6>\r" +
    "\n" +
    "                                    <h5>\r" +
    "\n" +
    "                                        <span id=\"lblBrotherprofessionDetails\">\r" +
    "\n" +
    "                                            {{ item.SibilingProfessionDetails}}\r" +
    "\n" +
    "                                    </span>\r" +
    "\n" +
    "                                    </h5>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div id=\"uplprofessioneb\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div id=\"professiondiv\">\r" +
    "\n" +
    "                                    <h6>\r" +
    "\n" +
    "                                        <label id=\"profession\" font-bold=\"true\">Company&JobLocation</label></h6>\r" +
    "\n" +
    "                                    <h5>\r" +
    "\n" +
    "                                        <span id=\"lblprofession\">\r" +
    "\n" +
    "                                            {{ (item.SibilingCompany!==null?item.SibilingCompany:'')+\" \"+(item.SibilingJobPLace.ToString()!=\"\" && item.SibilingJobPLace!=null?\",\"+item.SibilingJobPLace:\"\") }}\r" +
    "\n" +
    "                                    </span>\r" +
    "\n" +
    "                                    </h5>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div id=\"update0\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div id=\"ownerdiv0\">\r" +
    "\n" +
    "                                    <div id=\"uplConactNoeb\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <h6>\r" +
    "\n" +
    "                                                <label id=\"ConactNo\" font-bold=\"true\">Conact Nos</label></h6>\r" +
    "\n" +
    "                                            <h5>\r" +
    "\n" +
    "                                                <span id=\"lblConactNo\">\r" +
    "\n" +
    "                                                    {{ (item.SibilingMobileNumberWithCode!==null?item.SibilingMobileNumberWithCode:'')+\r" +
    "\n" +
    "                                                ((item.SibilngLandnumberwithcode.ToString()!=\"\" && item.SibilngLandnumberwithcode!=null)?\",\"+item.SibilngLandnumberwithcode:\"\")}}\r" +
    "\n" +
    "                                            </span>\r" +
    "\n" +
    "                                            </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <div id=\"brotheremail\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <h6>\r" +
    "\n" +
    "                                                <label id=\"brotheremail\" font-bold=\"true\">Email</label></h6>\r" +
    "\n" +
    "                                            <h5>\r" +
    "\n" +
    "                                                <span id=\"lblbrotheremail\">\r" +
    "\n" +
    "                                                    {{ item.SibilingEmail }}\r" +
    "\n" +
    "                                            </span>\r" +
    "\n" +
    "                                            </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div id=\"uuuuuuuppp\" ng-if=\"item.SibilingMarried==1\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div id=\"BROTHERDIV\">\r" +
    "\n" +
    "                                    <div id=\"uplWifeNameeb\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div id=\"divWifeNamenew\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <h6>\r" +
    "\n" +
    "                                                <label id=\"SpouseName\" font-bold=\"true\" style=\"font-weight: bold; font-family: helvetica; font-size: 18px\">\r" +
    "\n" +
    "                                                Spouse Name</label></h6>\r" +
    "\n" +
    "                                            <h5>\r" +
    "\n" +
    "                                                <span id=\"lblWifeName\">\r" +
    "\n" +
    "                                                    {{ item.SibilingSpouseName}}\r" +
    "\n" +
    "                                            </span>\r" +
    "\n" +
    "                                            </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div id=\"lblbrotherwifeeducationdetails\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div id=\"divlblbrotherwifeeducation\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <h6>\r" +
    "\n" +
    "                                                <label id=\"lblbrotherwifeeducation\" font-bold=\"true\">Education</label></h6>\r" +
    "\n" +
    "                                            <h5>\r" +
    "\n" +
    "                                                <span id=\"lblbrotherwifeeducationdetails\">\r" +
    "\n" +
    "                                                    {{ item.SibilingSpouseEducationDetails}}\r" +
    "\n" +
    "                                            </span>\r" +
    "\n" +
    "                                            </h5>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div id=\"lblbrotherwifeprofessiondetails\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div id=\"divlblbrotherwifeprofession\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <h6>\r" +
    "\n" +
    "                                                <label id=\"lblbrotherwifeprofession\" font-bold=\"true\">Profession</label></h6>\r" +
    "\n" +
    "                                            <h5>\r" +
    "\n" +
    "                                                <span id=\"lblbrotherwifeprofessiondetails\">\r" +
    "\n" +
    "                                                    {{ item.SibilingSpouseProfessionDetails}}\r" +
    "\n" +
    "                                            </span>\r" +
    "\n" +
    "                                            </h5>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div id=\"uplwifeprofessioneb\" class=\"edit_page_details_item_desc clearfix\" ng-hide=\"item.SibilingSpouseProfessionDetails=='HouseWife'\">\r" +
    "\n" +
    "                                        <h6>\r" +
    "\n" +
    "                                            <label id=\"wifeprofession\" font-bold=\"true\">Company&JobLocation</label></h6>\r" +
    "\n" +
    "                                        <h5>\r" +
    "\n" +
    "                                            <span id=\"lblwifeprofession\">\r" +
    "\n" +
    "                                                    {{ ((item.spoucecompanyName.ToString()!=\"\" && item.spoucecompanyName!=null)?item.spoucecompanyName:\"\")+((item.spoucejobloc.ToString()!=\"\"\r" +
    "\n" +
    "                                                    && item.spoucejobloc!=null)?\",\"+item.spoucejobloc:\"\") }}\r" +
    "\n" +
    "                                            </span>\r" +
    "\n" +
    "                                        </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div id=\"update1\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div id=\"ownerdiv1\">\r" +
    "\n" +
    "                                            <div id=\"wifenumbers\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                                <div id=\"divspousecontactnumbers\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                                    <h6>\r" +
    "\n" +
    "                                                        <label id=\"lblbrotherwife\" font-bold=\"true\">Contact Nos</label></h6>\r" +
    "\n" +
    "                                                    <h5>\r" +
    "\n" +
    "                                                        <span id=\"lblbrotherwifemobnumbers\">\r" +
    "\n" +
    "                                                           {{ (item.SibilingSpouceMobileNumberWithCode!==null?item.SibilingSpouceMobileNumberWithCode:'')\r" +
    "\n" +
    "                                                          +((item.SibilingSpouceLandNumberWithCode.ToString()!=\"\" && item.SibilingSpouceLandNumberWithCode!=null)?\",\"+item.SibilingSpouceLandNumberWithCode:\"\") }}\r" +
    "\n" +
    "                                                    </span>\r" +
    "\n" +
    "                                                    </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                            <div id=\"Brotherwife\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                                                <h6>\r" +
    "\n" +
    "                                                    <label id=\"brotherwifeemail\" font-bold=\"true\">Email</label></h6>\r" +
    "\n" +
    "                                                <h5>\r" +
    "\n" +
    "                                                    <span id=\"lblbrotherwifeemail\">\r" +
    "\n" +
    "                                                            {{ item.SpouseEmail }}\r" +
    "\n" +
    "                                                    </span>\r" +
    "\n" +
    "                                                </h5>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div id=\"uplWifeFatherfirstnameeb\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <h6>\r" +
    "\n" +
    "                                            <label id=\"lWifeFatherfirstname\" font-bold=\"true\">Spouse Father's Name</label></h6>\r" +
    "\n" +
    "                                        <h5>\r" +
    "\n" +
    "                                            <span id=\"lblWifeFatherfirstname\">\r" +
    "\n" +
    "                                                    {{ item.SibilingSpouseFatherName }}\r" +
    "\n" +
    "                                            </span>\r" +
    "\n" +
    "                                        </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div id=\"brotherspusefathercaste\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <h6>\r" +
    "\n" +
    "                                            <label id=\"botherwifefathercaste\" font-bold=\"true\">Spouse Father Caste</label></h6>\r" +
    "\n" +
    "                                        <h5>\r" +
    "\n" +
    "                                            <span id=\"lblbotherwifefathercaste\">\r" +
    "\n" +
    "                                                    {{ item.SibilingSpouseFatherCaste }}\r" +
    "\n" +
    "                                            </span>\r" +
    "\n" +
    "                                        </h5>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div id=\"upBroSpouseFatherNativePlace\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                                        <h6>\r" +
    "\n" +
    "                                            <label id=\"BroSpouseFatherNativePlace\" font-bold=\"true\">Native Place</label></h6>\r" +
    "\n" +
    "                                        <h5>\r" +
    "\n" +
    "                                            <span id=\"lblBroSpouseFatherNativePlace\">\r" +
    "\n" +
    "                                                   {{((item.BroSpouseFatherCity!=null && item.BroSpouseFatherCity.ToString()!=\"\")?item.BroSpouseFatherCity:\"\") +\r" +
    "\n" +
    "                                        ((item.BroSpouseFatherDistrictname!=null && item.BroSpouseFatherDistrictname.ToString()!=\"\")?\" ,\"+item.BroSpouseFatherDistrictname:\"\" )+\r" +
    "\n" +
    "                                        ((item.BroSpouseFatherStatename!=null && item.BroSpouseFatherStatename.ToString()!=\"\")?\" ,\"+item.BroSpouseFatherStatename:\"\" )+\r" +
    "\n" +
    "                                        ((item.BroSpouseFatherCountryname!=null && item.BroSpouseFatherCountryname.ToString()!=\"\")?\" ,\"+item.BroSpouseFatherCountryname:\"\" )}}\r" +
    "\n" +
    "                                            </span>\r" +
    "\n" +
    "                                        </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <hr />\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"edit_page_item_head clearfix\">\r" +
    "\n" +
    "            <h4>Sister Details\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </h4>\r" +
    "\n" +
    "            <div class=\"edit_page_item_ui clearfix\">\r" +
    "\n" +
    "                <div id=\"uplnksisterdet\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <a href=\"javascript:void(0);\" ng-click=\"sibblingPopulatePopulate('sister')\" data-original-title=\"Add Sister Details\" class=\"edit_page_add_button\">Add\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div id=\"uplistsister\" class=\"edit_page_details_item\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div id=\"listsister\" ng-repeat=\"item in sisterArr\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div>\r" +
    "\n" +
    "                    <div id=\"Div2\" ng-class=\"item.reviewstatus===false?'edit_page_details_item_desc clearfix reviewCls':'edit_page_details_item_desc clearfix'\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div>\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                                <div id=\"uplsisnamees\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <h6>\r" +
    "\n" +
    "                                        <label id=\"sisname\" font-bold=\"true\" style=\"color:red;\">Sister Name\r" +
    "\n" +
    "                                    </label>\r" +
    "\n" +
    "                                    </h6>\r" +
    "\n" +
    "                                    <h5>\r" +
    "\n" +
    "                                        <span id=\"lblsisname\" style=\"color:red;\">\r" +
    "\n" +
    "                                            {{ item.SibilingName+\" (\"+item.SisterElderORyounger+\")\"}}\r" +
    "\n" +
    "                                    </span>\r" +
    "\n" +
    "                                    </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div id=\"upllnksisteredites\" class=\"edit_page_item_ui clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <a class=\"edit_page_edit_button\" data-original-title=\"Edit Sister Details\" href=\"javascript:void(0);\" ng-click=\"sibblingPopulatePopulate('sister',item)\">Edit\r" +
    "\n" +
    "                                </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div id=\"sistereducationdetails\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <h6>\r" +
    "\n" +
    "                                        <label id=\"lblsistereducation\" font-bold=\"true\">Education</label></h6>\r" +
    "\n" +
    "                                    <h5>\r" +
    "\n" +
    "                                        <span id=\"lblsistereducationdetails\">\r" +
    "\n" +
    "                                            {{ item.SibilingEducationDetails}}\r" +
    "\n" +
    "                                    </span>\r" +
    "\n" +
    "                                    </h5>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div id=\"lblsisterprofessiondetails\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <h6>\r" +
    "\n" +
    "                                        <label id=\"lblsisterprofession\" font-bold=\"true\">Profession</label></h6>\r" +
    "\n" +
    "                                    <h5>\r" +
    "\n" +
    "                                        <span id=\"lblsisterprofessiondetails\">\r" +
    "\n" +
    "                                            {{ item.SibilingProfessionDetails}}\r" +
    "\n" +
    "                                    </span>\r" +
    "\n" +
    "                                    </h5>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div id=\"uplsisprofes\" class=\"edit_page_details_item_desc clearfix\" ng-hide=\"item.SibilingProfessionDetails=='HouseWife'\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <h6>\r" +
    "\n" +
    "                                    <label id=\"sisprof\" font-bold=\"true\">Company & Job Location </label></h6>\r" +
    "\n" +
    "                                <h5>\r" +
    "\n" +
    "                                    <span id=\"lblsisprof\">\r" +
    "\n" +
    "                                            {{ (item.SibilingCompany!==null?item.SibilingCompany:'')+ ((item.SibilingJobPLace.ToString()!=\"\" && item.SibilingJobPLace!=null)?\",\"+item.SibilingJobPLace:\"\")}}\r" +
    "\n" +
    "                                    </span>\r" +
    "\n" +
    "                                </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div id=\"update2\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div id=\"ownerdiv2\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <div id=\"uplsisnumbers\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <h6>\r" +
    "\n" +
    "                                                <label id=\"sisnumbers\" font-bold=\"true\">Contact Nos</label></h6>\r" +
    "\n" +
    "                                            <h5>\r" +
    "\n" +
    "                                                <span id=\"lblsisnumbers\">\r" +
    "\n" +
    "                                                    {{ (item.SibilingMobileNumberWithCode!==null?item.SibilingMobileNumberWithCode:'')+\r" +
    "\n" +
    "                                                ((item.SibilngLandnumberwithcode.ToString()!=\"\" && item.SibilngLandnumberwithcode!=null)?\",\"+item.SibilngLandnumberwithcode:\"\")}}\r" +
    "\n" +
    "                                            </span>\r" +
    "\n" +
    "                                            </h5>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div id=\"sisterwifeemail\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <h6>\r" +
    "\n" +
    "                                                <label id=\"sisteremail\" font-bold=\"true\">Email</label></h6>\r" +
    "\n" +
    "                                            <h5>\r" +
    "\n" +
    "                                                <span id=\"lblsisteremail\">\r" +
    "\n" +
    "                                                    {{ item.SibilingEmail }}\r" +
    "\n" +
    "                                            </span>\r" +
    "\n" +
    "                                            </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div id=\"pqw\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div id=\"Sisterspousedetails\" ng-if=\"item.SibilingMarried==1\">\r" +
    "\n" +
    "                                    <div id=\"uplhusnamees\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div id=\"divhusname\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <h6>\r" +
    "\n" +
    "                                                <label id=\"husname\" font-bold=\"true\" style=\"font-weight: bold; font-family: helvetica; font-size: 18px\">\r" +
    "\n" +
    "                                                Husband Name</label></h6>\r" +
    "\n" +
    "                                            <h5>\r" +
    "\n" +
    "                                                <span id=\"lblhusname\">\r" +
    "\n" +
    "                                                    {{ item.SibilingSpouseName}}\r" +
    "\n" +
    "                                            </span>\r" +
    "\n" +
    "                                            </h5>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <div id=\"lblsisterspouseeducation\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div id=\"divlblsisterspouseeducation\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <h6>\r" +
    "\n" +
    "                                                <label id=\"lblsisterspouseeducation\" font-bold=\"true\">Education</label></h6>\r" +
    "\n" +
    "                                            <h5>\r" +
    "\n" +
    "                                                <span id=\"lbllblsisterspouseeducationdetails\">\r" +
    "\n" +
    "                                                    {{ item.SibilingSpouseEducationDetails}}\r" +
    "\n" +
    "                                            </span>\r" +
    "\n" +
    "                                            </h5>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div id=\"lblsisterspouseprofession\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div id=\"divlblsisterspouseprofession\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <h6>\r" +
    "\n" +
    "                                                <label id=\"lblsisterspouseprofession\" font-bold=\"true\">Profession</label></h6>\r" +
    "\n" +
    "                                            <h5>\r" +
    "\n" +
    "                                                <span id=\"lblsisterspouseprofessiondetails\">\r" +
    "\n" +
    "                                                    {{ item.SibilingSpouseProfessionDetails}}\r" +
    "\n" +
    "                                            </span>\r" +
    "\n" +
    "                                            </h5>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div id=\"uplhusprofes\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div id=\"divlblsisterspousecmpy\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <h6>\r" +
    "\n" +
    "                                                <label id=\"husprof\" font-bold=\"true\">Company&JobLocation</label></h6>\r" +
    "\n" +
    "                                            <h5>\r" +
    "\n" +
    "                                                <span id=\"lblhusprof\">\r" +
    "\n" +
    "                                                    {{((item.spoucecompanyName.ToString()!=\"\" && item.spoucecompanyName!=null)?\" \"+item.spoucecompanyName:\"\")+((item.spoucejobloc.ToString()!=\"\" && item.spoucejobloc!=null)?\",\"+item.spoucejobloc:\"\") }}\r" +
    "\n" +
    "                                            </span>\r" +
    "\n" +
    "                                            </h5>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div id=\"update3\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div id=\"ownerdiv3\">\r" +
    "\n" +
    "                                            <div id=\"husbandnumbers\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                                <div id=\"divmobilesisterhus\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                                    <h6>\r" +
    "\n" +
    "                                                        <label id=\"lblsisterhusband\" font-bold=\"true\">Conact Nos</label></h6>\r" +
    "\n" +
    "                                                    <h5>\r" +
    "\n" +
    "                                                        <span id=\"lblhusbandnumbers\">\r" +
    "\n" +
    "                                                          {{ (item.SibilingSpouceMobileNumberWithCode!==null?item.SibilingSpouceMobileNumberWithCode:'')+((item.SibilingSpouceLandNumberWithCode.ToString()!=\"\" && item.SibilingSpouceLandNumberWithCode!=null)?\",\"\r" +
    "\n" +
    "                                                            +item.SibilingSpouceLandNumberWithCode:\"\")}}\r" +
    "\n" +
    "                                                    </span>\r" +
    "\n" +
    "                                                    </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                            <div id=\"lblsisterspouseemail\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                                <div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                                    <h6>\r" +
    "\n" +
    "                                                        <label id=\"sisterspouseemail\" font-bold=\"true\">Email</label></h6>\r" +
    "\n" +
    "                                                    <h5>\r" +
    "\n" +
    "                                                        <span id=\"lblsisterspouseemail\">{{ item.SpouseEmail }}\r" +
    "\n" +
    "                                                    </span>\r" +
    "\n" +
    "                                                    </h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div id=\"uplhusfathernamees\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div id=\"divhusfathernames\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <h6>\r" +
    "\n" +
    "                                                <label id=\"husfathernames\" font-bold=\"true\">Husband Father Name</label></h6>\r" +
    "\n" +
    "                                            <h5>\r" +
    "\n" +
    "                                                <span id=\"lblhusfathername\">\r" +
    "\n" +
    "                                                    {{ item.SibilingSpouseFatherName }}\r" +
    "\n" +
    "                                            </span>\r" +
    "\n" +
    "                                            </h5>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div id=\"sisterspousefathercaste\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div id=\"divsisterspousefathercaste\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                            <h6>\r" +
    "\n" +
    "                                                <label id=\"sisterhusbandfathercaste\" font-bold=\"true\">Husband Father Caste</label></h6>\r" +
    "\n" +
    "                                            <h5>\r" +
    "\n" +
    "                                                <span id=\"lblsisterSpousefathercaste\">\r" +
    "\n" +
    "                                                    {{ item.SibilingSpouseFatherCaste }}\r" +
    "\n" +
    "                                            </span>\r" +
    "\n" +
    "                                            </h5>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div id=\"upSisNativePlace\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <div>\r" +
    "\n" +
    "                                            <h6>\r" +
    "\n" +
    "                                                <label id=\"SisSpouseFatherNativePlace\" font-bold=\"true\">Native Place</label>\r" +
    "\n" +
    "                                            </h6>\r" +
    "\n" +
    "                                            <h5>\r" +
    "\n" +
    "                                                <span id=\"lblSisSpouseFatherNativePlace\">\r" +
    "\n" +
    "                                                   {{((item.SisSpousefatherCity!=null && item.SisSpousefatherCity.ToString()!=\"\")?item.SisSpousefatherCity:\"\") +\r" +
    "\n" +
    "                                        ((item.SisSpouseFatherDistrictname!=null && item.SisSpouseFatherDistrictname.ToString()!=\"\")?\" ,\"+item.SisSpouseFatherDistrictname:\"\" )+\r" +
    "\n" +
    "                                        ((item.SisSpouseFatherStatename!=null && item.SisSpouseFatherStatename.ToString()!=\"\")?\" ,\"+item.SisSpouseFatherStatename:\"\" )+\r" +
    "\n" +
    "                                        ((item.SisSpouseFatherCountryname!=null && item.SisSpouseFatherCountryname.ToString()!=\"\")?\" ,\"+item.SisSpouseFatherCountryname:\"\" )}}\r" +
    "\n" +
    "                                            </span>\r" +
    "\n" +
    "                                            </h5>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <hr />\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"SibblingCountPopup.html\">\r" +
    "\n" +
    "    <form name=\"sibblingCoutForm\" novalidate role=\"form\" ng-submit=\"sibblingCountsSubmit(SibCountObj)\">\r" +
    "\n" +
    "        <div class=\"modal-header\">\r" +
    "\n" +
    "            <h3 class=\"modal-title text-center\" id=\"modal-title\">Sibling Details\r" +
    "\n" +
    "                <a href=\"javascript:void(0);\" ng-click=\"cancel();\">\r" +
    "\n" +
    "                    <ng-md-icon icon=\"close\" style=\"fill:#c73e5f\" class=\"pull-right\" size=\"20\"></ng-md-icon>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-body clearfix pop_content_my\" id=\"modal-body\">\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblnoofsiblings\" class=\"pop_label_left\">No of Brothers<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my input-group\">\r" +
    "\n" +
    "                        <select multiselectdropdown ng-model=\"SibCountObj.ddlnoofsiblings\" ng-options=\"item.value as item.label for item in sibCountsBindArr\" required></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\" ng-show=\"SibCountObj.ddlnoofsiblings!==0\">\r" +
    "\n" +
    "                    <label for=\"lblnoofelderrother\" class=\"pop_label_left\">Elder Brother{{SibCountObj.ddlnoofelderrother}}</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <select multiselectdropdown ng-model=\"SibCountObj.ddlnoofelderrother\" ng-options=\"item.value as item.label for item in sibCountsBindArr\"></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\" ng-show=\"SibCountObj.ddlnoofsiblings!==0\">\r" +
    "\n" +
    "                    <label for=\"lblnoofyoungerbrother\" class=\"pop_label_left\">Younger Brother</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <select multiselectdropdown ng-model=\"SibCountObj.ddlnoofyoungerbrother\" ng-options=\"item.value as item.label for item in sibCountsBindArr\"></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblnoofsisters\" class=\"pop_label_left\">No of sisters<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my input-group\">\r" +
    "\n" +
    "                        <select multiselectdropdown ng-model=\"SibCountObj.ddlnoofsisters\" ng-options=\"item.value as item.label for item in sibCountsBindArr\" required></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\" ng-show=\"SibCountObj.ddlnoofsisters!==0\">\r" +
    "\n" +
    "                    <label for=\"lblnoofeldersisters\" class=\"pop_label_left\">Elder sisters</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <select multiselectdropdown ng-model=\"SibCountObj.ddlnoofeldersisters\" ng-options=\"item.value as item.label for item in sibCountsBindArr\"></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\" ng-show=\"SibCountObj.ddlnoofsisters!==0\">\r" +
    "\n" +
    "                    <label for=\"lblnoofyoungersisters\" class=\"pop_label_left\">Younger  sisters</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                        <select multiselectdropdown ng-model=\"SibCountObj.ddlnoofyoungersisters\" ng-options=\"item.value as item.label for item in sibCountsBindArr\"></select>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"row\">\r" +
    "\n" +
    "                    <br/>\r" +
    "\n" +
    "                    <!--<div class=\"col-lg-9\">\r" +
    "\n" +
    "                        <input type=\"submit\" value=\"Submit\" class=\"button_custom  pull-right\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-lg-3\">\r" +
    "\n" +
    "                        <input value=\"Cancel\" class=\"button_custom button_custom_reset  pull-right\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "                    </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <edit-footer></edit-footer>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"brotherModalContent.html\">\r" +
    "\n" +
    "    <form name=\"brotherForm\" novalidate role=\"form\" ng-submit=\"brotherForm.$valid  && sibBroSubmit(broObj)\" accessible-form>\r" +
    "\n" +
    "        <div class=\"modal-header\">\r" +
    "\n" +
    "            <h3 class=\"modal-title text-center\" id=\"modal-title\">Brother details\r" +
    "\n" +
    "                <a href=\"javascript:void(0);\" ng-click=\"cancel();\">\r" +
    "\n" +
    "                    <ng-md-icon icon=\"close\" style=\"fill:#c73e5f\" class=\"pull-right\" size=\"20\">Delete</ng-md-icon>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-body clearfix pop_content_my\" id=\"modal-body\">\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li class=\"clearfix\">\r" +
    "\n" +
    "                    <label for=\"lblElderYounger\" style=\"padding-top: 2%;\" class=\"pop_label_left\">Elder/Younger<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                    <!--<div class=\"pop_controls_right pop_radios_list\">\r" +
    "\n" +
    "                        <label>\r" +
    "\n" +
    "                <input ng-model=\"broObj.rdlBElderYounger\" value=\"42\" type=\"radio\"><span>&nbsp;Elder</span>\r" +
    "\n" +
    "            </label>\r" +
    "\n" +
    "                        <label class=\"\">\r" +
    "\n" +
    "                <input ng-model=\"broObj.rdlBElderYounger\" value=\"41\" type=\"radio\"><span>&nbsp;Younger</span>\r" +
    "\n" +
    "            </label>\r" +
    "\n" +
    "                    </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <md-input-container style=\"font-weight: 700;color:black;\">\r" +
    "\n" +
    "                        <md-radio-group ng-required=\"true\" name=\"rdlBElderYounger\" layout=\"row\" ng-model=\"broObj.rdlBElderYounger\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                            <md-radio-button value=\"42\" class=\"md-primary\">Elder</md-radio-button>\r" +
    "\n" +
    "                            <md-radio-button value=\"41\"> Younger </md-radio-button>\r" +
    "\n" +
    "                        </md-radio-group>\r" +
    "\n" +
    "                        <div ng-messages=\"brotherForm.rdlBElderYounger.$invalid\">\r" +
    "\n" +
    "                            <div ng-if=\"brotherForm.rdlBElderYounger.$invalid && (brotherForm.$submitted)\">This field is required.</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblBroName\" class=\"pop_label_left\">Name<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                        <input ng-model=\"broObj.txtBName\" class=\"form-control\" tabindex=\"2\" maxlength=\"100\" required/>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblbrotherreducation\" class=\"pop_label_left\">Education</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                        <input ng-model=\"broObj.txtbrotherreducation\" class=\"form-control\" tabindex=\"3\" maxlength=\"150\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblbrotherprofession\" class=\"pop_label_left\">Profession</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                        <input ng-model=\"broObj.txtbrotherprofession\" class=\"form-control\" tabindex=\"4\" maxlength=\"200\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblwifescmpy\" class=\"pop_label_left\">Company Name</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                        <input ng-model=\"broObj.txtBCompanyname\" class=\"form-control\" tabindex=\"5\" maxlength=\"100\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblbrojobloc\" class=\"pop_label_left\">Job Location</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                        <input ng-model=\"broObj.txtBJoblocation\" class=\"form-control\" tabindex=\"6\" maxlength=\"100\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li style=\"height: 15px;\"></li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <contact-directive emailhide=\"true\" dmobile=\"broObj.ddlBMObileCountryID\" strmobile=\"broObj.txtBmobilenumber\" dalternative=\"broObj.ddlBMObileCountryID2\" stralternative=\"broObj.txtBmobilenumber2\" dland=\"broObj.ddlBLandLineCountryID\" strareacode=\"broObj.txtBAreCode\"\r" +
    "\n" +
    "                    strland=\"broObj.txtBLandNumber\" strmail=\"broObj.txtBEmails\"></contact-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblIsMarried\" style=\"padding-top: 2%;\" class=\"pop_label_left\">Married<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <md-input-container style=\"font-weight: 700;color:black;\">\r" +
    "\n" +
    "                        <md-radio-group ng-required=\"true\" name=\"rdlBIsMarried\" ng-change=\"BIsMarried(broObj.rdlBIsMarried);\" layout=\"row\" ng-model=\"broObj.rdlBIsMarried\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                            <md-radio-button value=\"1\" class=\"md-primary\">Yes</md-radio-button>\r" +
    "\n" +
    "                            <md-radio-button value=\"0\"> No </md-radio-button>\r" +
    "\n" +
    "                        </md-radio-group>\r" +
    "\n" +
    "                        <div ng-messages=\"brotherForm.rdlBIsMarried.$invalid\">\r" +
    "\n" +
    "                            <div ng-if=\"brotherForm.rdlBIsMarried.$invalid && (brotherForm.$submitted)\">This field is required.</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <div ng-if=\"broObj.rdlBIsMarried==1\">\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                        <label for=\"lblWifeName\" class=\"pop_label_left\">Spouse Name</label>\r" +
    "\n" +
    "                        <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                            <input ng-model=\"broObj.txtBWifeName\" class=\"form-control\" tabindex=\"19\" maxlength=\"100\" />\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                        <label for=\"lblWifeEducation\" class=\"pop_label_left\">Spouse Education</label>\r" +
    "\n" +
    "                        <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                            <input ng-model=\"broObj.txtbrotherwifeeducation\" class=\"form-control\" tabindex=\"20\" maxlength=\"150\" />\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                        <label for=\"lblwifescmpy\" class=\"pop_label_left\">Spouse Profession</label>\r" +
    "\n" +
    "                        <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                            <input ng-model=\"broObj.txtbrotherwifeprofession\" class=\"form-control\" tabindex=\"21\" maxlength=\"200\" />\r" +
    "\n" +
    "                            <label class=\"checkbox-inline\"><input ng-model=\"broObj.chkboxbrotherwifeprofession\" type=\"checkbox\" ng-change=\"BhousewiseChk(broObj);\"><span>&nbsp;HouseWife</span> </label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div id=\"brothercmpyyy\" ng-hide=\"broObj.chkboxbrotherwifeprofession==true\">\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblwifescmpy\" class=\"pop_label_left\">Company Name</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                <input ng-model=\"broObj.txtBWifeCompanyName\" class=\"form-control\" tabindex=\"23\" maxlength=\"100\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblwifefjobloc\" class=\"pop_label_left\">Job Location</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                <input ng-model=\"broObj.txtBwifeJoblocation\" class=\"form-control\" tabindex=\"24\" maxlength=\"100\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <li style=\"height: 15px;\"></li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <contact-directive emailhide=\"true\" dmobile=\"broObj.ddlBWMobileCode\" strmobile=\"broObj.txtBWifeMobileNumber\" dalternative=\"broObj.ddlBWMobileCode2\" stralternative=\"broObj.txtBWifeMobileNumber2\" dland=\"broObj.ddlBWifeLandLineCountryCode\" strareacode=\"broObj.txtBWifeLandLineAreaCode\"\r" +
    "\n" +
    "                        strland=\"broObj.txtBWifeLandLineNumber\" strmail=\"broObj.txtwifeEmail\"></contact-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div id=\"divWifeSurname\">\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <label for=\"lblwifefathername\" class=\"pop_label_left\">Spouse Father SurName</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <input ng-model=\"broObj.txtBWifeFatherSurName\" class=\"form-control\" tabindex=\"36\" maxlength=\"50\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblNatveWife\" class=\"pop_label_left\">Spouse Father Name</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                <input ng-model=\"broObj.txtBWWifeFatherName\" class=\"form-control\" tabindex=\"37\" maxlength=\"100\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <label for=\"lblspousefatherCaste\" class=\"pop_label_left\">Spouse Father Caste</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <select multiselectdropdown ng-model=\"broObj.ddlborherspousefathercaste\" typeofdata=\"caste\"></select>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <country-directive countryshow=\"false\" dcountry=\"CountryVal\" cityshow=\"false\" othercity=\"false\" dstate=\"broObj.ddlBroSpousefatherState\" ddistrict=\"broObj.ddlBroSpousefatherDistrict\"></country-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblBroSpouseCity\" class=\"pop_label_left\">Native Place</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                                <input ng-model=\"broObj.txtBroSpousefatherCity\" class=\"form-control\" tabindex=\"41\" maxlength=\"100\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <li class=\"row \">\r" +
    "\n" +
    "                    <!--<div class=\"col-lg-9\">\r" +
    "\n" +
    "                        <input value=\"Submit\" class=\"button_custom pull-right\" type=\"submit\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-lg-3\">\r" +
    "\n" +
    "                        <input value=\"Cancel\" class=\"button_custom button_custom_reset  pull-right\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "                    </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <edit-footer></edit-footer>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"sisterModalContent.html\">\r" +
    "\n" +
    "    <form name=\"sibsisForm\" novalidate role=\"form\" ng-submit=\"sibsisForm.$valid  && sibSisSubmit(sisObj)\" accessible-form>\r" +
    "\n" +
    "        <div class=\"modal-header\">\r" +
    "\n" +
    "            <h3 class=\"modal-title text-center\" id=\"modal-title\">Sister details\r" +
    "\n" +
    "                <a href=\"javascript:void(0);\" ng-click=\"cancel();\">\r" +
    "\n" +
    "                    <ng-md-icon icon=\"close\" style=\"fill:#c73e5f\" class=\"pull-right\" size=\"20\">Delete</ng-md-icon>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-body clearfix pop_content_my\" id=\"modal-body\">\r" +
    "\n" +
    "            <ul id=\"ulsibilingsister\">\r" +
    "\n" +
    "                <li class=\"clearfix\">\r" +
    "\n" +
    "                    <label for=\"lblElderYounger\" style=\"padding-top: 2%;\" class=\"pop_label_left\">Elder/Younger<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"radio-group-my\">\r" +
    "\n" +
    "                        <md-input-container style=\"font-weight: 700;color:black;\">\r" +
    "\n" +
    "                            <md-radio-group ng-required=\"true\" name=\"rbtSElderyounger\" layout=\"row\" ng-model=\"sisObj.rbtSElderyounger\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                                <md-radio-button value=\"322\" class=\"md-primary\">Elder</md-radio-button>\r" +
    "\n" +
    "                                <md-radio-button value=\"321\"> Younger </md-radio-button>\r" +
    "\n" +
    "                            </md-radio-group>\r" +
    "\n" +
    "                            <div ng-messages=\"sibsisForm.rbtSElderyounger.$invalid\">\r" +
    "\n" +
    "                                <div ng-if=\"sibsisForm.rbtSElderyounger.$invalid && (sibsisForm.$submitted)\">This field is required.</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblSisName\" class=\"pop_label_left\">Name<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                        <input ng-model=\"sisObj.txtSisterName\" class=\"form-control\" tabindex=\"2\" maxlength=\"100\" required/>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblsisEducation\" class=\"pop_label_left\">Education</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                        <input ng-model=\"sisObj.txtsisEducation\" class=\"form-control\" tabindex=\"3\" maxlength=\"150\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                    <label for=\"lblsisProfession\" class=\"pop_label_left\">Profession</label>\r" +
    "\n" +
    "                    <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                        <input ng-model=\"sisObj.txtsisProfession\" class=\"form-control\" tabindex=\"4\" maxlength=\"200\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <input ng-model=\"sisObj.chksisProfession\" type=\"checkbox\" ng-change=\"ShousewiseChk(sisObj);\"><span>&nbsp;HouseWife</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <div id=\"divsiscmpyyy\" ng-hide=\"sisObj.chksisProfession==true\">\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                        <label for=\"lblsisscmpy\" class=\"pop_label_left\">Company Name</label>\r" +
    "\n" +
    "                        <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                            <input ng-model=\"sisObj.txtSCompanyName\" class=\"form-control\" tabindex=\"6\" maxlength=\"100\" />\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                        <label for=\"lblsissjobloc\" class=\"pop_label_left\">Job Location</label>\r" +
    "\n" +
    "                        <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                            <input ng-model=\"sisObj.txtSjobloc\" class=\"form-control\" tabindex=\"7\" maxlength=\"100\" />\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div style=\"height: 15px;\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <contact-directive emailhide=\"true\" dmobile=\"sisObj.ddlSMobileCountyCodeID\" strmobile=\"sisObj.txtSMobileNumber\" dalternative=\"sisObj.ddlSMobileCountyCodeID2\" stralternative=\"sisObj.txtSMobileNumber2\" dland=\"sisObj.ddlSLandLineCountryCodeID\" strareacode=\"sisObj.txtSAreacoude\"\r" +
    "\n" +
    "                    strland=\"sisObj.txtSNumber\" strmail=\"sisObj.txtSEmails\"></contact-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li class=\"clearfix\">\r" +
    "\n" +
    "                    <label for=\"lblIsMarried\" class=\"pop_label_left\">Is Married<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"radio-group-my\">\r" +
    "\n" +
    "                        <md-input-container style=\"font-weight: 700;color:black;\">\r" +
    "\n" +
    "                            <md-radio-group ng-required=\"true\" name=\"rdlSIsMarried\" layout=\"row\" ng-change=\"SIsMarried(sisObj.rdlSIsMarried);\" ng-model=\"sisObj.rdlSIsMarried\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                                <md-radio-button value=\"1\" class=\"md-primary\">Yes</md-radio-button>\r" +
    "\n" +
    "                                <md-radio-button value=\"0\"> No </md-radio-button>\r" +
    "\n" +
    "                            </md-radio-group>\r" +
    "\n" +
    "                            <div ng-messages=\"sibsisForm.rdlSIsMarried.$invalid\">\r" +
    "\n" +
    "                                <div ng-if=\"sibsisForm.rdlSIsMarried.$invalid && (sibsisForm.$submitted)\">This field is required.</div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </md-input-container>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div id=\"divSister\" ng-if=\"sisObj.rdlSIsMarried==1\">\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                        <label for=\"lblhussisfamilyStatus\" class=\"pop_label_left\">Husband Name</label>\r" +
    "\n" +
    "                        <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                            <input ng-model=\"sisObj.txtShusName\" class=\"form-control\" tabindex=\"20\" maxlength=\"100\" />\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                        <label for=\"lblHusbandEducation\" class=\"pop_label_left\">Husband Education</label>\r" +
    "\n" +
    "                        <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                            <input ng-model=\"sisObj.txtHusbandEducation\" class=\"form-control\" tabindex=\"21\" maxlength=\"150\" />\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                        <label for=\"lblHusbandProfession\" class=\"pop_label_left\">Husband Profession</label>\r" +
    "\n" +
    "                        <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                            <input ng-model=\"sisObj.txtHusbandProfession\" class=\"form-control\" tabindex=\"22\" maxlength=\"200\" />\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                        <label for=\"lblhuscmpy\" class=\"pop_label_left\">Company Name</label>\r" +
    "\n" +
    "                        <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                            <input ng-model=\"sisObj.txtShusCompanyName\" class=\"form-control\" tabindex=\"23\" maxlength=\"100\" />\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                        <label for=\"lblhussjobloc\" class=\"pop_label_left\">Job Location</label>\r" +
    "\n" +
    "                        <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                            <input ng-model=\"sisObj.txtShusjobloc\" class=\"form-control\" tabindex=\"24\" maxlength=\"100\" />\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li style=\"height: 15px;\"></li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <contact-directive emailhide=\"true\" dmobile=\"sisObj.ddlSHusMobileCountryID\" strmobile=\"sisObj.txtSHusMobileNumber\" dalternative=\"sisObj.ddlSHusMobileCountryID2\" stralternative=\"sisObj.txtSHusMobileNumber2\" dland=\"sisObj.ddlSHusLandCountryID\" strareacode=\"sisObj.txtSHusLandArea\"\r" +
    "\n" +
    "                        strland=\"sisObj.txtSHusLandNumber\" strmail=\"sisObj.txtHusbandEmail\"></contact-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                        <label for=\"lblwifefathername\" class=\"pop_label_left\">Husband Father SurName</label>\r" +
    "\n" +
    "                        <div class=\"pop_controls_right\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <input ng-model=\"sisObj.txtHusbandFatherSurName\" class=\"form-control\" tabindex=\"36\" maxlength=\"50\" />\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                        <label for=\"lblNatvehus\" class=\"pop_label_left\">Husband Father Name</label>\r" +
    "\n" +
    "                        <div class=\"pop_controls_right\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <input ng-model=\"sisObj.txtHusbandFatherName\" class=\"form-control\" tabindex=\"37\" maxlength=\"100\" />\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <label for=\"lblsisterspousefatherCaste\" class=\"pop_label_left\">Husband Father Caste</label>\r" +
    "\n" +
    "                        <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <select multiselectdropdown ng-model=\"sisObj.ddlsisterspusefathercaste\" typeofdata=\"caste\"></select>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <country-directive countryshow=\"false\" cityshow=\"false\" othercity=\"false\" dcountry=\"CountryVal\" dstate=\"sisObj.ddlSisSpouceFatherState\" ddistrict=\"sisObj.ddlSisSpouceFatherDistrict\"></country-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                        <label for=\"lblSisSpouceFatherCity\" class=\"pop_label_left\">Native Place</label>\r" +
    "\n" +
    "                        <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                            <input ng-model=\"sisObj.txtSisSpouceFatherCity\" class=\"form-control\" tabindex=\"41\" maxlength=\"100\" />\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <li class=\"row \">\r" +
    "\n" +
    "                    <!--<div class=\"col-lg-9\">\r" +
    "\n" +
    "                        <input value=\"Submit\" class=\"button_custom pull-right\" type=\"submit\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-lg-3\">\r" +
    "\n" +
    "                        <input value=\"Cancel\" class=\"button_custom button_custom_reset  pull-right\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "                    </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <edit-footer></edit-footer>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "<alert-directive></alert-directive>\r" +
    "\n" +
    "<style>\r" +
    "\n" +
    "    .md-dialog-container {\r" +
    "\n" +
    "        z-index: 99999999999;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "</style>"
  );


  $templateCache.put('editview/app/views/editSideMenu.html',
    "<div class=\"edit_pages_sidebar  clearfix\" ng-controller=\"editSideMenuCtrl\">\r" +
    "\n" +
    "    <div class=\"edit_page_profile_pic\">\r" +
    "\n" +
    "        <img id=\"imgphoto\" src=\"../../access/Images/ProfilePics/KMPL_91035_Images/img1_Images/210910352_ApplicationPhoto.jpg\">\r" +
    "\n" +
    "        <span id=\"lblcust_Id\" style=\"display: none;\"></span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"edit_pages_sidebar_profile_details\">\r" +
    "\n" +
    "        <h6>\r" +
    "\n" +
    "            <span id=\"lstPersolnalDetails_ctrl0_lblCustNamewithProfileID\">Anil S (210910352)</span></h6>\r" +
    "\n" +
    "        <div class=\"edit_pages_sidebar_profile_details_in\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <p>\r" +
    "\n" +
    "                <span id=\"lstPersolnalDetails_ctrl0_lblMaritalDOBHeight\">Unmarried ,22 Aug 1990 (26) ,6'0 in - 183  ,Fair</span>\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "            <p>\r" +
    "\n" +
    "                <span id=\"lstPersolnalDetails_ctrl0_lblReligionMTCaste\">Hindu ,Telugu, Reddy</span>\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "            <p>\r" +
    "\n" +
    "                <span>\r" +
    "\n" +
    "                <span id=\"lstPersolnalDetails_ctrl0_lblcitizen\" style=\"font-weight:bold;\"> Born Citizen:India</span>\r" +
    "\n" +
    "                </span>\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"clear\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"edit_pages_sidebar_menu clearfix\">\r" +
    "\n" +
    "        <ul>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <a id=\"lnkeducationandprof\" href=\"#/editEducationAndProfession\">Education & Profession</a></li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <a id=\"lnkmanagephoto\" href=\"#/editManagePhoto\">Manage Photo</a></li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <a id=\"lnkparents\" href=\"#/editparent\">Parent Details</a></li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <a id=\"lnkpartner\" href=\"#/editPartnerPreferences\">Partner Preferences</a></li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <a id=\"lnksiblings\" href=\"#/editSiblingDetails\">Sibling Details</a></li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <a id=\"lnkastro\" href=\"#/editAstro\">Astro Details</a></li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <a id=\"lnkproperty\" href=\"#/editProperty\">Property Details</a>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <a id=\"lnkrelatives\" href=\"#/editRelative\">Relative Details</a>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <a id=\"lnkreference\" href=\"#/editReferences\">References</a>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('editview/app/views/educationAndProfession.html',
    "<div class=\"edit_pages_content_main clearfix\" ng-init=\"getdata()\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"edit_page_item\" id=\"divEducation\">\r" +
    "\n" +
    "        <div class=\"edit_page_item_head clearfix\">\r" +
    "\n" +
    "            <h4>Education Details </h4>\r" +
    "\n" +
    "            <div class=\"edit_page_item_ui clearfix\">\r" +
    "\n" +
    "                <a class=\"edit_page_add_button\" href=\"javascript:void(0);\" ng-click=\"showpopup('showEduModal');\">Add</a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"edit_page_details_item\">\r" +
    "\n" +
    "            <div id=\"fulleducation\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div id=\"ListView1\" ng-repeat=\"item in educationSelectArray\">\r" +
    "\n" +
    "                    <div id=\"reviewdiv\" ng-class=\"item.reviewstatus===false?'edit_page_details_item_desc clearfix reviewCls':'edit_page_details_item_desc clearfix'\">\r" +
    "\n" +
    "                        <div id=\"lbleducationgroup\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <label id=\"lbleducationgroup\" ng-style=\"{color: item.EduHighestDegree==1?'Red':'Black'}\">{{item.EducationCategory!=null?(item.EducationCategory==\"Below Graduation\"?\"Under Graduation\":\"Education\"):\"Education\"}}</label>\r" +
    "\n" +
    "                            </h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <label id=\"edgoup\" ng-style=\"{color: item.EduHighestDegree==1?'Red':''}\">{{item.EducationGroup+\" \"+((item.EducationSpecialization!=null?\"(\" +item.EducationSpecialization+\")\":\"\"))+\" \"+((item.EduPassOfYear!=null?\",Completed\"+\"-\"+item.EduPassOfYear:\"\"))}} </label>\r" +
    "\n" +
    "                            </h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div id=\"editeducationbutton\" class=\"edit_page_item_ui clearfix\">\r" +
    "\n" +
    "                            <a id=\"LinkButton1dfd\" href=\"javascript:void(0);\" ng-click=\"showpopup('showEduModal',item)\">Edit</a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <a id=\"lnkdeleteEdu\" title=\"\" data-placement=\"bottom\" data-toggle=\"tooltip\" data-original-title=\"Delete Education Details\" class=\"edit_page_del_button\" text=\"Delete\"></a>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div id=\"divuniversityhiding\" class=\"edit_page_details_item_desc clearfix\" ng-hide=\"item.EduUniversity===null\">\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <span id=\"Label1\">University</span>\r" +
    "\n" +
    "                            </h6>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblTuniversity\">{{item.EduUniversity}}</span>\r" +
    "\n" +
    "                            </h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div id=\"divCollege\" class=\"edit_page_details_item_desc clearfix\" ng-hide=\"item.EduCollege===null\">\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <span id=\"Label9\">College</span>\r" +
    "\n" +
    "                            </h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblTcollege\">{{item.EduCollege}}</span>\r" +
    "\n" +
    "                            </h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"edit_page_details_item_desc clearfix\" id=\"divcityviewhiding\" ng-hide=\"item.EduCityIn===null\">\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <span id=\"Label3\" font-bold=\"true\">City Study In</span>\r" +
    "\n" +
    "                            </h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblcountry\">{{item.EduCityIn+\",\"+item.EduDistrictIn+\",\"+item.EduStateIn+\",\"+item.EduCountryIn}}</span>\r" +
    "\n" +
    "                            </h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div id=\"divmerit\" class=\"edit_page_details_item_desc clearfix\" ng-hide=\"item.Educationdesc==null\">\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <span id=\"Label5\" font-bold=\"true\">Education Merits</span>\r" +
    "\n" +
    "                            </h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblmerits\">{{item.Educationdesc}}</span>\r" +
    "\n" +
    "                            </h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"edit_page_item\">\r" +
    "\n" +
    "        <div id=\"divlnkAddProfession\" class=\"edit_page_item_head clearfix\">\r" +
    "\n" +
    "            <h4>Professional Details\r" +
    "\n" +
    "            </h4>\r" +
    "\n" +
    "            <div class=\"edit_page_item_ui clearfix\">\r" +
    "\n" +
    "                <div ng-if=\"ProfessionSelectArray.length==0\">\r" +
    "\n" +
    "                    <a class=\"edit_page_add_button\" href=\"javascript:void(0);\" ng-click=\"showpopup('showProfModal')\">Add</a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"edit_page_details_item\">\r" +
    "\n" +
    "            <div id=\"lstProfession\" ng-repeat=\"item in ProfessionSelectArray\">\r" +
    "\n" +
    "                <div id=\"reviewdiv\" ng-class=\"item.reviewstatus===false?'reviewCls':''\">\r" +
    "\n" +
    "                    <div class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <span id=\"lblprofession\" style=\"font-weight:bold;\">Profession</span></h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"txtProfession\">{{item.Professional+\" \"+(item.CompanyName !=null && item.CompanyName !=\"\"?\"in\"+\" \"+item.CompanyName:item.CompanyName)}}</span></h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"edit_page_item_ui clearfix\" ng-if=\"ProfessionSelectArray.length>0\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <a id=\"Linkedit\" class=\"edit_page_add_button\" href=\"javascript:void(0);\" ng-click=\"showpopup('showProfModal',item)\">Edit</a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div id=\"divcitywork\" class=\"edit_page_details_item_desc clearfix\" ng-hide=\"item.CityWorkingIn==null\">\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <span id=\"lblcitywork\" style=\"font-weight:bold;\">City working in </span></h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"lblcityworkingg\">{{(item.CityWorkingIn!=null?\" \"+item.CityWorkingIn:\" \")+ \" \" +(item.StateWorkingIn!=null && item.StateWorkingIn!=\" \"?\",\"+item.StateWorkingIn:\"\")+\" \"+(item.CountryWorkingIn!=null && item.CountryWorkingIn!=\"\"? \", \"+item.CountryWorkingIn:\" \")}}</span></h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div id=\"Div1\">\r" +
    "\n" +
    "                        <div class=\"edit_page_details_item_desc clearfix\" ng-hide=\"item.Salary===null\">\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <span id=\"lblsal\" style=\"font-weight:bold;\">Monthly salary</span></h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblsalaryy\">{{item.Currency+\" \"+(item.Salary!=null && item.Salary!=\"\"?\" \"+item.Salary+\"/-\":\"\")}}</span></h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div id=\"Div2\" class=\"edit_page_details_item_desc clearfix\" ng-hide=\"item.WorkingFromDate===null\">\r" +
    "\n" +
    "                            <h6>\r" +
    "\n" +
    "                                <span id=\"lblworkfrom\" style=\"font-weight:bold;\">Working from date</span></h6>\r" +
    "\n" +
    "                            <h5>\r" +
    "\n" +
    "                                <span id=\"lblworkingfrom\">{{item.WorkingFromDate}}</span></h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div id=\"Div3\" class=\"edit_page_details_item_desc clearfix\" ng-hide=\"item.VisaStatus===null\">\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <label id=\"lblvisa\">visa status</label>\r" +
    "\n" +
    "                        </h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"txtvisa\">{{item.VisaStatus}}</span>\r" +
    "\n" +
    "                        </h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div id=\"Div4\" class=\"edit_page_details_item_desc clearfix\" ng-hide=\"item.ResidingSince===null\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <span id=\"lblsincedate\">Since date</span>\r" +
    "\n" +
    "                        </h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"txtsincedate\">{{item.ResidingSince}}</span>\r" +
    "\n" +
    "                        </h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div id=\"Div5\" class=\"edit_page_details_item_desc clearfix\" ng-hide=\"item.ArrivingDate===null\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <span id=\"lblarrival\">Arrival Date</span>\r" +
    "\n" +
    "                        </h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"txtarrival\">{{item.ArrivingDate}}</span>\r" +
    "\n" +
    "                        </h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div id=\"Div6\" class=\"edit_page_details_item_desc clearfix\" ng-hide=\"item.DepartureDate===null\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <span id=\"lbldepartture\">Departure Date</span>\r" +
    "\n" +
    "                        </h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span id=\"txtdaparture\"> {{item.DepartureDate}}</span>\r" +
    "\n" +
    "                        </h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div id=\"Div7\" class=\"edit_page_details_item_desc clearfix\" ng-hide=\"item.OccupationDetails===null\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <h6>\r" +
    "\n" +
    "                            <span id=\"lblOccupation\" style=\"font-weight:bold;\">Occupation Details</span></h6>\r" +
    "\n" +
    "                        <h5>\r" +
    "\n" +
    "                            <span>{{item.OccupationDetails}} </span></h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div id=\"divlnkadd\" class=\"edit_page_item\">\r" +
    "\n" +
    "        <div class=\"edit_page_item_head clearfix\">\r" +
    "\n" +
    "            <h4>Mention your goals, interests and hobbies etc</h4>\r" +
    "\n" +
    "            <div class=\"edit_page_item_ui clearfix\">\r" +
    "\n" +
    "                <div id=\"upAboutAdd\" ng-if=\"lblaboutUrself==='' || lblaboutUrself===null\">\r" +
    "\n" +
    "                    <a class=\"edit_page_add_button\" href=\"javascript:void(0);\" ng-click=\"showpopup('showAboutModal')\">Add</a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"edit_page_details_item\">\r" +
    "\n" +
    "            <div id=\"reviewdiv\" ng-class=\"AboutReviewStatusID===0?'edit_page_details_item_desc clearfix reviewCls':'edit_page_details_item_desc clearfix'\">\r" +
    "\n" +
    "                <div class=\"form-group\">\r" +
    "\n" +
    "                    <div id=\"uplblAbout\" class=\"edit_page_details_item_desc clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <h5 style=\"float: none; width: 92%; display: block;\">\r" +
    "\n" +
    "                            <span id=\"lblabouturself\">{{lblaboutUrself}}</span>\r" +
    "\n" +
    "                        </h5>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div ng-if=\"lblaboutUrself!='' && lblaboutUrself!=null\" class=\"edit_page_item_ui clearfix\">\r" +
    "\n" +
    "                        <a class=\"edit_page_edit_button\" href=\"javascript:void(0);\" ng-click=\"showpopup('showAboutModal',lblaboutUrself)\">Edit</a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div id=\"edupopupdiv\">\r" +
    "\n" +
    "        <script type=\"text/ng-template\" id=\"EduModalContent.html\">\r" +
    "\n" +
    "            <form name=\"eduForm\" novalidate role=\"form\" ng-submit=\"eduForm.$valid  && eduSubmit(edoObj);\" accessible-form>\r" +
    "\n" +
    "                <div class=\"modal-header\">\r" +
    "\n" +
    "                    <h3 class=\"modal-title text-center\" id=\"modal-title\">Education Details\r" +
    "\n" +
    "                        <a href=\"javascript:void(0);\" ng-click=\"cancel();\">\r" +
    "\n" +
    "                            <ng-md-icon icon=\"close\" style=\"fill:#c73e5f\" class=\"pull-right\" size=\"20\"></ng-md-icon>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </h3>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "                    <ul id=\"uleducation\" class='modal-body clearfix pop_content_my'>\r" +
    "\n" +
    "                        <li class=\"clearfix\">\r" +
    "\n" +
    "                            <label for=\"lblIsHighestDegree\" class=\"pop_label_left\" style=\"padding-top: 2%;\">Is Highest Degree<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                            <div class=\"radio-group-my\">\r" +
    "\n" +
    "                                <md-input-container style=\"font-weight: 700;color:black;\">\r" +
    "\n" +
    "                                    <md-radio-group ng-required=\"true\" name=\"IsHighestDegree\" layout=\"row\" ng-model=\"edoObj.IsHighestDegree\" class=\"md-block\" flex-gt-sm ng-disabled=\"manageakerts\">\r" +
    "\n" +
    "                                        <md-radio-button value=\"1\" class=\"md-primary\">Yes</md-radio-button>\r" +
    "\n" +
    "                                        <md-radio-button value=\"0\"> No </md-radio-button>\r" +
    "\n" +
    "                                    </md-radio-group>\r" +
    "\n" +
    "                                    <div ng-messages=\"eduForm.IsHighestDegree.$invalid\">\r" +
    "\n" +
    "                                        <div ng-if=\"eduForm.IsHighestDegree.$invalid && (eduForm.$submitted)\">This field is required.</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </md-input-container>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lbleducationGroup\" class=\"pop_label_left\">Education category<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right select-box-my input-group\">\r" +
    "\n" +
    "                                <select multiselectdropdown id=\"estt\" ng-model=\"edoObj.ddlEduCatgory\" typeofdata=\"educationcategory\" ng-change=\"changeBind('EducationCatgory',edoObj.ddlEduCatgory);\" required></select>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lbleducationGroup\" class=\"pop_label_left\">Education group<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right select-box-my input-group\">\r" +
    "\n" +
    "                                <select multiselectdropdown ng-model=\"edoObj.ddlEdugroup\" ng-options=\"item.value as item.label for item in eduGroupArr\" ng-change=\"changeBind('EducationGroup',edoObj.ddlEdugroup);\" required></select>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lbleducationGroup\" class=\"pop_label_left\">Edu specialization<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right select-box-my input-group\">\r" +
    "\n" +
    "                                <select multiselectdropdown ng-model=\"edoObj.ddlEduspecialization\" ng-options=\"item.value as item.label for item in eduSpecialisationArr\" required></select>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\" id=\"divuniversity\">\r" +
    "\n" +
    "                            <label for=\"lbluniversity\" class=\"pop_label_left\">University</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                <input type=\"text\" ng-model=\"edoObj.txtuniversity\" maxlength=\"100\" class=\"form-control\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblcollege\" class=\"pop_label_left\">College</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                <input type=\"text\" ng-model=\"edoObj.txtcollege\" maxlength=\"150\" class=\"form-control\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblPassOfYear\" class=\"pop_label_left\">Pass of year{{edoObj.ddlpassOfyear}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                                <select multiselectdropdown ng-model=\"edoObj.ddlpassOfyear\" ng-options=\"item1.value as item1.label for item1 in passOfyearArr\"></select>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <country-directive countryshow=\"true\" cityshow=\"true\" othercity=\"true\" dcountry=\"edoObj.ddlCountry\" dstate=\"edoObj.ddlState\" ddistrict=\"edoObj.ddlDistrict\" dcity=\"edoObj.ddlcity\" strothercity=\"edoObj.txtcity\"></country-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblEduMerits\" class=\"pop_label_left\">Educational merits</label>\r" +
    "\n" +
    "                            <div class=\"\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <textarea ng-model=\"edoObj.txtEdumerits\" maxlength=\"500\" rows=\"4\" cols=\"20\" style=\"max-width:515px;width:100%;\" tabindex=\"12\" onkeydown=\"return CharacterCountedu()\" onkeyup=\"return CharacterCountedu()\"></textarea>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"row\">\r" +
    "\n" +
    "                            <br/>\r" +
    "\n" +
    "                            <!--<div class=\"col-lg-9\">\r" +
    "\n" +
    "                                <input value=\"Submit\" class=\"button_custom pull-right\" type=\"submit\">\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"col-lg-3\">\r" +
    "\n" +
    "                                <input value=\"Cancel\" class=\"button_custom button_custom_reset  pull-right\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "                            </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <edit-footer></edit-footer>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </form>\r" +
    "\n" +
    "        </script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div id=profpopupdiv>\r" +
    "\n" +
    "        <script type=\"text/ng-template\" id=\"profModalContent.html\">\r" +
    "\n" +
    "            <form name=\"profForm\" novalidate role=\"form\" ng-submit=\"ProfSubmit(profObj);\" accessible-form>\r" +
    "\n" +
    "                <div class=\"modal-header\">\r" +
    "\n" +
    "                    <h3 class=\"modal-title text-center\" id=\"modal-title\">Profession details\r" +
    "\n" +
    "                        <a href=\"javascript:void(0);\" ng-click=\"cancel();\">\r" +
    "\n" +
    "                            <ng-md-icon icon=\"close\" style=\"fill:#c73e5f\" class=\"pull-right\" size=\"25\">Delete</ng-md-icon>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </h3>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"modal-body clearfix pop_content_my\" id=\"modal-body\">\r" +
    "\n" +
    "                    <ul>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblempin\" class=\"pop_label_left\">Employed In<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right select-box-my input-group\">\r" +
    "\n" +
    "                                <select multiselectdropdown ng-model=\"profObj.ddlemployedin\" typeofdata=\"ProfCatgory\" required></select>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblprofessiongroup\" class=\"pop_label_left\">Professional group<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right select-box-my input-group\">\r" +
    "\n" +
    "                                <select multiselectdropdown ng-model=\"profObj.ddlprofgroup\" typeofdata=\"ProfGroup\" ng-change=\"ProfchangeBind('ProfessionGroup',profObj.ddlprofgroup);\" required></select>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblprofession\" class=\"pop_label_left\">Profession<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right select-box-my input-group\">\r" +
    "\n" +
    "                                <select multiselectdropdown ng-model=\"profObj.ddlprofession\" ng-options=\"item.value as item.label for item in ProfSpecialisationArr\" required></select>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblcmpyname\" class=\"pop_label_left\">Company name</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                                <input ng-model=\"profObj.txtcmpyname\" class=\"form-control\" tabindex=\"4\" maxlength=\"100\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblsal\" class=\"pop_label_left\">Monthly salary</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right select-box-my select-box-my-double\">\r" +
    "\n" +
    "                                <select multiselectdropdown ng-model=\"profObj.ddlcurreny\" typeofdata='currency'></select>\r" +
    "\n" +
    "                                <input ng-model=\"profObj.txtsalary\" style=\"float:right\" class=\"form-control\" onchange=\"currency();\" maxlength=\"7\" tabindex=\"6\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <country-directive countryshow=\"true\" cityshow=\"true\" othercity=\"true\" dcountry=\"profObj.ddlCountryProf\" dstate=\"profObj.ddlStateProf\" ddistrict=\"profObj.ddlDistrictProf\" dcity=\"profObj.ddlcityworkingprofession\" strothercity=\"profObj.txtcityprofession\"></country-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblworkingfrome\" class=\"pop_label_left\">Working from date{{profObj.txtworkingfrom}}</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <date-picker strdate=\"profObj.txtworkingfrom\"></date-picker>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <div id=\"divfalseVisa\" ng-if=\"profObj.ddlCountryProf!=1\">\r" +
    "\n" +
    "                            <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                                <label for=\"lblvisastatus\" class=\"pop_label_left\">visa status</label>\r" +
    "\n" +
    "                                <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                                    <div class=\"select-box-my\">\r" +
    "\n" +
    "                                        <select multiselectdropdown ng-model=\"profObj.ddlvisastatus\"></select>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li class=\"clearfix form-group\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"pop_label_left\" for=\"lblsincedate\">Since date</label>\r" +
    "\n" +
    "                                <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                    <date-picker strdate=\"profObj.txtssincedate\"></date-picker>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                                <label for=\"lblarrivaldate\" class=\"pop_label_left\">Arrival Date</label>\r" +
    "\n" +
    "                                <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                    <date-picker strdate=\"profObj.txtarrivaldate\"></date-picker>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                                <label for=\"lbldeaparturedate\" class=\"pop_label_left\">Departure Date</label>\r" +
    "\n" +
    "                                <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                    <date-picker strdate=\"profObj.txtdeparture\"></date-picker>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lbloccupation\" class=\"pop_label_left\">Occupation Details</label>\r" +
    "\n" +
    "                            <div class=\"\">\r" +
    "\n" +
    "                                <textarea ng-model=\"profObj.txtoccupation\" style=\"width:515px;\" rows=\"4\" tabindex=\"16\" maxlength=\"500\" onkeydown=\"return CharacterCount()\"></textarea>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label id=\"lbloccupationcount\" style=\"color: #1e1c1c; font-size: 13px;\"></label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"row\">\r" +
    "\n" +
    "                            <!--<div class=\"col-lg-9\">\r" +
    "\n" +
    "                                <input type=\"submit\" value=\"Submit\" class=\"button_custom  pull-right\">\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"col-lg-3\">\r" +
    "\n" +
    "                                <input value=\"Cancel\" class=\"button_custom button_custom_reset  pull-right\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "                            </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <edit-footer></edit-footer>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                    </ul>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </form>\r" +
    "\n" +
    "        </script>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div id=\"AboutPopup\">\r" +
    "\n" +
    "        <script type=\"text/ng-template\" id=\"AboutModalContent.html\">\r" +
    "\n" +
    "            <form name=\"aboutForm\" novalidate role=\"form\" ng-submit=\"AboutUrselfSubmit(aboutObj)\">\r" +
    "\n" +
    "                <div class=\"modal-header\">\r" +
    "\n" +
    "                    <h3 class=\"modal-title text-center\" id=\"modal-title\">About your self\r" +
    "\n" +
    "                        <a href=\"javascript:void(0);\" ng-click=\"cancel();\">\r" +
    "\n" +
    "                            <ng-md-icon icon=\"close\" style=\"fill:#c73e5f\" class=\"pull-right\" size=\"25\">Delete</ng-md-icon>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </h3>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"modal-body clearfix pop_content_my\" id=\"modal-body\">\r" +
    "\n" +
    "                    <ul>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label id=\"lblabout\" style=\"color: #9b2828; font-size: 13px;\">\r" +
    "\n" +
    "            				(Please don't write phone numbers/emails/any junk characters)*</label>\r" +
    "\n" +
    "                            <textarea ng-model=\"aboutObj.txtAboutUS\" style=\"width: 500px; height: 150px;\" class=\"col-lg-10\" maxlength=\"1000\" required ng-class=\"form-control\" required />\r" +
    "\n" +
    "                            <div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <label id=\"Label1\" style=\"color: red; font-size: 13px;\" class=\"pull-right\">(max 1000 characters)</label>\r" +
    "\n" +
    "                            <label id=\"lblaboutcount\" style=\"color: #1e1c1c; font-size: 13px;\">{{aboutForm.txtAboutUS.length}}</label>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"row\">\r" +
    "\n" +
    "                            <!--<div class=\"col-lg-9\">\r" +
    "\n" +
    "                                <button class=\"button_custom  pull-right\" type=\"submit\" promise-btn=\"submitPromise\">Submit</button>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"col-lg-3\">\r" +
    "\n" +
    "                                <input value=\"Cancel\" class=\"button_custom button_custom_reset  pull-right\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "                            </div>-->\r" +
    "\n" +
    "                            <edit-footer></edit-footer>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                    </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </form>\r" +
    "\n" +
    "        </script>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<style>\r" +
    "\n" +
    "    .multiselect {\r" +
    "\n" +
    "        border: solid 1px #ADA2A2 !important;\r" +
    "\n" +
    "        color: #000;\r" +
    "\n" +
    "        background: #fff !important;\r" +
    "\n" +
    "        box-shadow: none !important;\r" +
    "\n" +
    "        height: 34px !important;\r" +
    "\n" +
    "        line-height: 33px;\r" +
    "\n" +
    "        margin: 0 !important;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "</style>\r" +
    "\n" +
    "<alert-directive></alert-directive>"
  );


  $templateCache.put('editview/app/views/oldAlert.html',
    "<script type=\"text/ng-template\" id=\"oldAlert.html\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"{{typecls}}\">\r" +
    "\n" +
    "        <div class=\"modal-header\">\r" +
    "\n" +
    "            <a href=\"javascript:void(0);\" ng-click=\"close();\">\r" +
    "\n" +
    "                <ng-md-icon icon=\"close\" style=\"fill:#c73e5f\" class=\"pull-right\" size=\"20\"></ng-md-icon>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "            <h4 class=\"modal-title \">\r" +
    "\n" +
    "                <center>Alert</center>\r" +
    "\n" +
    "            </h4>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"modal-body \" id=\"modalbodyID \">\r" +
    "\n" +
    "        <p>\r" +
    "\n" +
    "            <label style=\"color:blue;\">{{msgs}}</label>\r" +
    "\n" +
    "        </p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"modal-footer \">\r" +
    "\n" +
    "        <button type=\"button \" class=\"btn btn-default \" ng-click=\"close(); \">Close</button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</script>"
  );


  $templateCache.put('editview/app/views/testcontroller.html',
    "<div id=\"edupopupdiv\">\r" +
    "\n" +
    "    <a class=\"edit_page_add_button\" href=\"javascript:void(0);\" ng-click=\"clickkk();\">Add</a>\r" +
    "\n" +
    "    <div ng-controller=\"eduAndProfCtrl\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <script type=\"text/ng-template\" id=\"EduModalContent.html\">\r" +
    "\n" +
    "            <form name=\"eduForm\" novalidate role=\"form\" ng-submit=\"eduSubmit(edoObj);\">\r" +
    "\n" +
    "                <div class=\"modal-header\">\r" +
    "\n" +
    "                    <h3 class=\"modal-title text-center\" id=\"modal-title\">Education Details\r" +
    "\n" +
    "                        <a href=\"javascript:void(0);\" ng-click=\"cancel();\">\r" +
    "\n" +
    "                            <ng-md-icon icon=\"close\" style=\"fill:#c73e5f\" class=\"pull-right\" size=\"20\"></ng-md-icon>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </h3>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "                    <ul id=\"uleducation\" class='modal-body clearfix pop_content_my'>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblIsHighestDegree\" class=\"pop_label_left\">Is Highest Degree<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                            <div class=\"radio-group-my input-group\">\r" +
    "\n" +
    "                                <label><input ng-model=\"edoObj.IsHighestDegree\" value=\"1\" type=\"radio\"><span>&nbsp;Yes</span> </label>\r" +
    "\n" +
    "                                <label class=\"\"><input ng-model=\"edoObj.IsHighestDegree\" value=\"0\" type=\"radio\"><span>&nbsp;No</span></label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lbleducationGroup\" class=\"pop_label_left\">Education category<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right select-box-my input-group\">\r" +
    "\n" +
    "                                <select multiselectdropdown ng-model=\"edoObj.ddlEduCatgory\" typeofdata=\"educationcategory\" ng-change=\"changeBind('EducationCatgory',edoObj.ddlEduCatgory);\" required></select>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lbleducationGroup\" class=\"pop_label_left\">Education group<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right select-box-my input-group\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <select multiselectdropdown ng-model=\"edoObj.ddlEdugroup\" ng-options=\"item.value as item.label for item in eduGroupArr\" ng-change=\"changeBind('EducationGroup',edoObj.ddlEdugroup);\" required></select>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lbleducationGroup\" class=\"pop_label_left\">Edu specialization<span style=\"color: red; margin-left: 3px;\">*</span></label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"pop_controls_right select-box-my input-group\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <select multiselectdropdown ng-model=\"edoObj.ddlEduspecialization\" typeofdata=\"\" ng-options=\"item.value as item.label for item in eduSpecialisationArr\" required></select>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\" id=\"divuniversity\">\r" +
    "\n" +
    "                            <label for=\"lbluniversity\" class=\"pop_label_left\">University</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                <input type=\"text\" ng-model=\"edoObj.txtuniversity\" maxlength=\"100\" class=\"form-control\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblcollege\" class=\"pop_label_left\">College</label>\r" +
    "\n" +
    "                            <div class=\"pop_controls_right\">\r" +
    "\n" +
    "                                <input type=\"text\" ng-model=\"edoObj.txtcollege\" maxlength=\"150\" class=\"form-control\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblPassOfYear\" class=\"pop_label_left\">Pass of year{{edoObj.ddlpassOfyear}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"pop_controls_right select-box-my\">\r" +
    "\n" +
    "                                <select multiselectdropdown ng-model=\"edoObj.ddlpassOfyear\" ng-options=\"item1.value as item1.label for item1 in passOfyearArr\"></select>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <country-directive countryshow=\"true\" cityshow=\"true\" othercity=\"true\" dcountry=\"edoObj.ddlCountry\" dstate=\"edoObj.ddlState\" ddistrict=\"edoObj.ddlDistrict\" dcity=\"edoObj.ddlcity\" strothercity=\"edoObj.txtcity\"></country-directive>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <li class=\"clearfix form-group\">\r" +
    "\n" +
    "                            <label for=\"lblEduMerits\" class=\"pop_label_left\">Educational merits</label>\r" +
    "\n" +
    "                            <div class=\"\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <textarea ng-model=\"edoObj.txtEdumerits\" maxlength=\"500\" rows=\"4\" cols=\"20\" style=\"width:515px;\" tabindex=\"12\" onkeydown=\"return CharacterCountedu()\" onkeyup=\"return CharacterCountedu()\"></textarea>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "                        <li class=\"row \">\r" +
    "\n" +
    "                            <div class=\"col-lg-9\">\r" +
    "\n" +
    "                                <input value=\"Submit\" class=\"button_custom pull-right\" type=\"submit\">\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"col-lg-3\">\r" +
    "\n" +
    "                                <input value=\"Cancel\" class=\"button_custom button_custom_reset  pull-right\" ng-click=\"cancel();\" type=\"button\">\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </form>\r" +
    "\n" +
    "        </script>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('editview/masterView/footer.html',
    "<footer ng-controller=\"footercontrol\">\r" +
    "\n" +
    "    <div class=\"footer_in\" id=\"divFooterinner\">\r" +
    "\n" +
    "        <a class=\"logo2 pull-left\" style=\"margin: 10px 40px 0 0;\">&nbsp;</a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div id=\"livechat\">\r" +
    "\n" +
    "            &nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "            <a onclick=\"OpenLHNChat();return false;\" href=\"javascript:void(0)\" target=\"_blank\" id=\"lhnWin\" class=\"icon-chat-footer pull-left\"></a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div id=\"livechatdiv\">\r" +
    "\n" +
    "                <!-- This code must be installed within the body tags 3422-->\r" +
    "\n" +
    "                <script type=\"text/javascript\" defer='defer'>\r" +
    "\n" +
    "                    var lhnAccountN = \"3422\";\r" +
    "\n" +
    "                    var lhnButtonN = 4720;\r" +
    "\n" +
    "                    var lhnChatPosition = '100';\r" +
    "\n" +
    "                    var lhnInviteEnabled = 1;\r" +
    "\n" +
    "                    var lhnWindowN = 0;\r" +
    "\n" +
    "                    var lhnDepartmentN = 0;\r" +
    "\n" +
    "                </script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <script type=\"text/javascript\" defer='defer'>\r" +
    "\n" +
    "            function OpenLHNChat() {\r" +
    "\n" +
    "                if (typeof CustomOpenLHNChat == 'function') {\r" +
    "\n" +
    "                    CustomOpenLHNChat();\r" +
    "\n" +
    "                    return false;\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                var wleft = (screen.width - 580 - 32) / 2;\r" +
    "\n" +
    "                var wtop = (screen.height - 420 - 96) / 2;\r" +
    "\n" +
    "                var bLHNOnline = 0;\r" +
    "\n" +
    "                var lhnwindow = 0;\r" +
    "\n" +
    "                var sScrollbars = (bLHNOnline == 0) ? \"yes\" : \"no\";\r" +
    "\n" +
    "                if (document.location.protocol == 'https:' || (typeof lhnJsHost != 'undefined' && lhnJsHost == \"https://\")) {\r" +
    "\n" +
    "                    lhnWin = window.open('https://www.livehelpnow.net/lhn/livechatvisitor.aspx?zzwindow=' + lhnwindow + '&lhnid=' + 3422 + '&d=' + 0, 'lhnchat', 'left=' + wleft + ',top=' + wtop + ',width=580,height=435,toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=' + sScrollbars + ',copyhistory=no,resizable=yes');\r" +
    "\n" +
    "                } else {\r" +
    "\n" +
    "                    lhnWin = window.open('http://www.livehelpnow.net/lhn/livechatvisitor.aspx?zzwindow=' + lhnwindow + '&lhnid=' + 3422 + '&d=' + 0, 'lhnchat', 'left=' + wleft + ',top=' + wtop + ',width=580,height=435,toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=' + sScrollbars + ',copyhistory=no,resizable=yes');\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "                if (typeof Zstepx != 'undefined') {\r" +
    "\n" +
    "                    if (Zstepx == 10) {\r" +
    "\n" +
    "                        Zslide();\r" +
    "\n" +
    "                    }\r" +
    "\n" +
    "                }\r" +
    "\n" +
    "            }\r" +
    "\n" +
    "        </script>\r" +
    "\n" +
    "        <div class=\"social pull-right\">\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li><a href=\"javascript:void(0)\">&nbsp;\r" +
    "\n" +
    "                    <div class=\"icon-fb\" style=\"margin: 10px;\"></div></a></li>\r" +
    "\n" +
    "                <li><a href=\"javascript:void(0)\">&nbsp;\r" +
    "\n" +
    "                    <div class=\"icon-linkedin\" style=\"margin: 11px 4px 4px 6px;\"></div></a></li>\r" +
    "\n" +
    "                <li><a href=\"javascript:void(0)\">&nbsp;\r" +
    "\n" +
    "                    <div class=\"icon-twitter\" style=\"margin: 11px 4px 4px 6px;\"></div></a></li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "            <span class=\"clear\">&nbsp;</span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"clear\">&nbsp;</div>\r" +
    "\n" +
    "        <hr />\r" +
    "\n" +
    "        <div class=\"footer_block_1 span4\">\r" +
    "\n" +
    "            <h6>about kaakateeya</h6>\r" +
    "\n" +
    "            <p><span>Kaakateeya.com</span>, a top-notch online matrimonial site committed to deliver high quality match making service since 1982.</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"span2\">\r" +
    "\n" +
    "            <h6>our services</h6>\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnkFooterSucess\" href=\"successstories\">success stories</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnkSearchFooter\" href=\"javascript:void(0)\" ng-click=\"searchpage('profile')\">Search</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"linkcareers\" href=\"help\">careers</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"linkfaq\" href=\"faqs\">faq’s</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnktermsFooter\" href=\"termsAndConditions\">Terms Of Use</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"span2\">\r" +
    "\n" +
    "            <h6>information</h6>\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li><a ng-click=\"showforgetpasswordpopup()\" href=\"javascript:void(0)\">Forgot Password</a></li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnkFeedBackFooter\" href=\"feedback\">Feed Back</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnkBranchesFooter\" href=\"ourbranches\">Our Branches</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"linkHelp\" href=\"help\">Help</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnkPrivacyFooter\" href=\"privacyPolicy\">Privacy Policy</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"span3\">\r" +
    "\n" +
    "            <h6>contact inforamtion</h6>\r" +
    "\n" +
    "            <h3>103,109,Vijayasree Apartments,\r" +
    "\n" +
    "                <br /> Behind Chermas,Ameerpet,Hyderabad\r" +
    "\n" +
    "                <br />\r" +
    "\n" +
    "                <span>Contact: 91- 7675818080,040-23747777</span>\r" +
    "\n" +
    "                <br /> Email :info@telugumarriages.com\r" +
    "\n" +
    "                <br /> Timings :8:00:00 AM To 8:00:00 PM</h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"clear\">&nbsp;</div>\r" +
    "\n" +
    "        <p class=\"copy_rights\">\r" +
    "\n" +
    "            &copy; 2004-2013 www.Kaakateeya.com Matrimony - Online Marriage Site. All Rights Reserved.\r" +
    "\n" +
    "        </p>\r" +
    "\n" +
    "        <div class=\"color_strip strip-color\">&nbsp;</div>\r" +
    "\n" +
    "        <div class=\"strip-color color_strip2\">&nbsp;</div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <forgot-password></forgot-password>\r" +
    "\n" +
    "</footer>"
  );


  $templateCache.put('editview/masterView/header.html',
    "<div class=\"header_inner\" id=\"divInnerMaster\" ng-controller=\"headctrl\" ng-init=\"headerinit()\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"container_my clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <a id=\"IbtnLogodisplay\" href=\"javascript:void(0)\" ng-click=\"redirecthomeordashboard()\" class=\"logo3 pull-left\" />\r" +
    "\n" +
    "        <input type=\"button\" value=\"Login\" ng-show=\"loginstatus\" id=\"btnLoginsubmit\" class=\"pull-right button_custom login_show\" ng-click=\"divloginblock();\" />\r" +
    "\n" +
    "        <input type=\"button\" value=\"Logout\" ng-show=\"loginoutstatus\" id=\"btnLogOut\" class=\"pull-right button_custom\" ng-click=\"ClearlocalStorage();\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"login_block_header\" ng-style=\"loginpopup===true?{'display':'block'}:{'display':'none'}\" id=\"divLogin\">\r" +
    "\n" +
    "            <form name=\"myForms\">\r" +
    "\n" +
    "                <input type=\"text\" id=\"txtUserName\" ng-keyup=\"myForms.$valid && $event.keyCode == 13 && loginsubmit()\" placeholder=\"ProfileID/EmailID\" style=\"height: 38px;border: 1px solid #cbc0c0 !important;\" ng-model=\"username\" required/>\r" +
    "\n" +
    "                <input type=\"password\" id=\"txtPassword\" ng-keyup=\"myForms.$valid && $event.keyCode == 13 && loginsubmit()\" placeholder=\"Password\" style=\"height: 38px;border: 1px solid #cbc0c0 !important;\" ng-model=\"password\" required/>\r" +
    "\n" +
    "                <span class=\"clear\">&nbsp;</span>\r" +
    "\n" +
    "                <div class=\"login_help\">\r" +
    "\n" +
    "                    <a id=\"lnkForgotPassword\" href=\"javascript:void(0)\" ng-click=\"showforgetpasswordpopup()\">Forgot Password</a>\r" +
    "\n" +
    "                    <a href=\"registration\">New User Sign Up</a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <md-button id=\"btnUserLogin\" ng-click=\"loginsubmit()\" ng-disabled=\"myForms.$invalid\" class=\"md-raised md-warn\">Login</md-button>\r" +
    "\n" +
    "            </form>\r" +
    "\n" +
    "            <span class=\"clear\">&nbsp;</span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"header_inner_rt clearfix\">\r" +
    "\n" +
    "            <h3>\r" +
    "\n" +
    "                <a id=\"lnkFeedbackMenu\" href=\"feedback\">Feedback</a>\r" +
    "\n" +
    "            </h3>\r" +
    "\n" +
    "            <h4>make a missed call<s></s>pan><em>+91-9390999999</em></span>\r" +
    "\n" +
    "            </h4>\r" +
    "\n" +
    "            <h4>Support No<span>+1-734-926-1011</span></h4>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"navbar_inner\" id=\"divMemberName\" ng-show=\"withlogin\" set-class-when-at-top=\"fix-to-top\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"container_my clearfix\">\r" +
    "\n" +
    "            <div class=\"profile_own_name pull-left clearfix\">\r" +
    "\n" +
    "                <img id=\"IMasterpic\" ng-src=\"{{profilepic}}\" style=\"width: 31px !important; height: 31px !important; border: solid 2px #fc6a1b;border-radius: 3px;display: inline-block; float: left;\" />\r" +
    "\n" +
    "                <h2>\r" +
    "\n" +
    "                    <label id=\"lblCustFName\">{{usernamepersonal}}</label> &nbsp;&nbsp;(\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <label id=\"lblprofile\">{{profileid}}</label>)\r" +
    "\n" +
    "                    <br />\r" +
    "\n" +
    "                    <span>Accout type :</span>\r" +
    "\n" +
    "                    <a id=\"lblpaid\" ng-href=\"{{hrefpaid}}\" style=\"color:White;\">{{paidstatus}}</a>\r" +
    "\n" +
    "                </h2>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"profile_own_menu profile_own_menu2 pull-right\" id=\"MenuDiv\">\r" +
    "\n" +
    "                <a class=\"menu_toggle pull-right\">Menu</a>\r" +
    "\n" +
    "                <ul class=\"pull-right\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a id=\"lnkMyHome\" href=\"javascript:void(0)\" ng-click=\"homepagelinks('myhome')\">My Home</a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a href=\"javascript:void(0)\">my account</a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <ul>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkviewmyprofile\" href=\"javascript:void(0);\" ng-click=\"viewfullmyprofile()\">View My Profile</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkeditprofile\" href=\"editview\">Edit Profile</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkmanagephoto\" href=\"editview/editManagePhoto\">Manage Photo</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkmanagehoroscope\" href=\"editview/editAstro\">Manage Horoscope</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkprofilesettings\" href=\"profilesettings\">Profile Settings</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a id=\"lnksearch\" href=\"javascript:void(0)\" ng-click=\"searchpage('profile')\">Search</a>\r" +
    "\n" +
    "                        <ul>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkgenaralsearch\" href=\"javascript:void(0)\" ng-click=\"searchpage('general')\">General Search</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkAdvancedSearch\" href=\"javascript:void(0)\" ng-click=\"searchpage('advanced')\">Advanced Search</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkprofileidsearch\" href=\"javascript:void(0)\" ng-click=\"searchpage('profile')\">Profileid Search</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a href=\"javascript:void(0)\">my package</a>\r" +
    "\n" +
    "                        <ul>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkupgrademembership\" href=\"UpgradeMembership\">Upgrade Membership</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkmyorders\" href=\"myorders\">My Orders and Statistics</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkmembershipfaqs\" href=\"faqs\">Membership Faqs</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkAddOnPacks\" href=\"AddOnPacks\" ng-hide=\"true\">Add On Packs</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a href=\"javascript:void(0)\">matches</a>\r" +
    "\n" +
    "                        <ul>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkmybookmarks\" href=\"javascript:void(0)\" ng-click=\"homepagelinks('BookMarked')\">My BookMarked Profiles</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkwhobookmarkedme\" href=\"javascript:void(0)\" ng-click=\"homepagelinks('BookMarkedme')\">Who BookMarked Me</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkigonredprofile\" href=\"javascript:void(0)\" ng-click=\"homepagelinks('Ignored')\">Ignored Profiles</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkviewedbutnotexpress\" href=\"javascript:void(0)\" ng-click=\"homepagelinks('myprofile')\">My profile viewed by others</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a href=\"javascript:void(0)\">messages</a>\r" +
    "\n" +
    "                        <ul>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkPersonalizedmsg\" href=\"javascript:void(0)\" ng-click=\"homepagelinks('Chats')\">Chats</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkrequests\" href=\"javascript:void(0)\" ng-click=\"homepagelinks('Requests')\">Requests</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkMyContact\" href=\"javascript:void(0)\" ng-click=\"homepagelinks('Express')\">Express interest</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a href=\"help\">Help</a>\r" +
    "\n" +
    "                        <ul>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"lnkcontactus\" href=\"help\">Contact Us</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"linkmysupportickets\" href=\"MySupportTickets\">My Support Tickets</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"lnkfeedback\" href=\"feedback\">Feed Back</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                            <li>\r" +
    "\n" +
    "                                <a id=\"lnktakeatour\" href=\"takeatour\">Take A Tour</a>\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"navbar_inner\" id=\"divwithoutlogin\" ng-show=\"withoutlogin\">\r" +
    "\n" +
    "        <div class=\"container_my clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"profile_own_menu pull-right\">\r" +
    "\n" +
    "                <a class=\"menu_toggle pull-right\">Menu</a>\r" +
    "\n" +
    "                <ul class=\"pull-right\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <li><a href=\"registration\">Register free</a></li>\r" +
    "\n" +
    "                    <li><a href=\"javascript:void(0)\" ng-click=\"searchpage('profile')\">Search <span></span></a></li>\r" +
    "\n" +
    "                    <li><a href=\"javascript:void(0);\" ng-click=\"divloginblock()\">Upgrade</a></li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a id=\"lnkSucessstoreiesFooter\" href=\"successstories\">success stories <span></span></a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li>\r" +
    "\n" +
    "                        <a id=\"linkfooterhelp\" href=\"help\">Help</a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li><a href=\"javascript:void(0);\" ng-click=\"redirecthomeordashboard()\">Home</a></li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <forgot-password></forgot-password>\r" +
    "\n" +
    "    <script type=\"text/ng-template\" id=\"sessionalert.html\">\r" +
    "\n" +
    "        <div class=\"modal-content\">\r" +
    "\n" +
    "            <div class=\"modal-header\">\r" +
    "\n" +
    "                <h3> Confirmation</h3>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"modal-body\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <h4 class=\"col-lg-offset-1\">Do you want to continue Session</h4>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"clearfix\"></div>\r" +
    "\n" +
    "                <br>\r" +
    "\n" +
    "                <div class='row'>\r" +
    "\n" +
    "                    <div class='col-lg-4 col-lg-offset-2'>\r" +
    "\n" +
    "                        <button type='button' class='btn btn-danger' ng-click='closesession()'>close</button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class='col-lg-5'>\r" +
    "\n" +
    "                        <button type='button' class='btn btn-success' ng-click='acceptcontinue()'>Continue</button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"modal-footer\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </script>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"\">\r" +
    "\n" +
    "    <div class=\"edit_pages_sidebar clearfix\" ng-controller=\"personalCtrl\">\r" +
    "\n" +
    "        <div class=\"edit_page_profile_pic\">\r" +
    "\n" +
    "            <img id=\"imgphoto\" ng-src=\"{{imgsrc}}\">\r" +
    "\n" +
    "            <span id=\"lblcust_Id\" style=\"display: none;\"></span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"edit_pages_sidebar_profile_details\">\r" +
    "\n" +
    "            <h6>\r" +
    "\n" +
    "                <span id=\"lstPersolnalDetails_ctrl0_lblCustNamewithProfileID\">{{PersonalObj.Name+\" (\"+PersonalObj.ProfileID+\")\"}}</span></h6>\r" +
    "\n" +
    "            <div class=\"edit_pages_sidebar_profile_details_in\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <p>\r" +
    "\n" +
    "                    <span id=\"lstPersolnalDetails_ctrl0_lblMaritalDOBHeight\">{{PersonalObj.MartialStatus+\" ,\"+PersonalObj.DateofBirth+((PersonalObj.Age!=\"\" && PersonalObj.Age!=null)?\" (\"+PersonalObj.Age+\")\":PersonalObj.Age)+((PersonalObj.Height!=\"\" && PersonalObj.Height!=null)?\" ,\"+PersonalObj.Height:PersonalObj.Height)+((PersonalObj.Complexion!=\"\")?\" ,\"+PersonalObj.Complexion:PersonalObj.Complexion)}}</span>\r" +
    "\n" +
    "                </p>\r" +
    "\n" +
    "                <p>\r" +
    "\n" +
    "                    <span id=\"lstPersolnalDetails_ctrl0_lblReligionMTCaste\">{{PersonalObj.Religion+\" ,\"+PersonalObj.Mothertongue+\", \"+PersonalObj.Caste+((PersonalObj.SubCaste!=\"\" && PersonalObj.SubCaste!=null)? \" (\"+SubCaste+\")\":SubCaste)}}</span>\r" +
    "\n" +
    "                </p>\r" +
    "\n" +
    "                <p>\r" +
    "\n" +
    "                    <span>\r" +
    "\n" +
    "                <span id=\"lstPersolnalDetails_ctrl0_lblcitizen\" style=\"font-weight:bold;\"> {{(PersonalObj.Borncountry!=null && PersonalObj.Borncountry!=\"\")?\" Born Citizen:\"+PersonalObj.Borncountry:Borncountry}}</span>\r" +
    "\n" +
    "                    </span>\r" +
    "\n" +
    "                </p>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"clear\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"edit_pages_sidebar_menu clearfix\">\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnkeducationandprof\" href=\"editview/editEducationAndProfession\" ng-style=\"{color:lnkeducationandprofReview==true?'Red':''}\">Education & Profession</a></li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnkmanagephoto\" href=\"editview/editManagePhoto\">Manage Photo</a></li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnkparents\" href=\"editview/editparent\" ng-style=\"{color:lnkparentsReview==true?'Red':''}\">Parent Details</a></li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnkpartner\" href=\"editview/editPartnerPreferences\" ng-style=\"{color:lnkpartnerReview==true?'Red':''}\">Partner Preferences</a></li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnksiblings\" href=\"editview/editSiblingDetails\" ng-style=\"{color:lnksiblingsReview==true?'Red':''}\">Sibling Details</a></li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnkastro\" href=\"editview/editAstro\" ng-style=\"{color:lnkastroReview==true?'Red':''}\">Astro Details</a></li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnkproperty\" href=\"editview/editProperty\" ng-style=\"{color:lnkpropertyReview==true?'Red':''}\">Property Details</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnkrelatives\" href=\"editview/editRelative\" ng-style=\"{color:lnkrelativesReview==true?'Red':''}\">Relative Details</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a id=\"lnkreference\" href=\"editview/editReferences\" ng-style=\"{color:lnkreferenceReview==true?'Red':''}\">References</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<style type=\"text/css\">\r" +
    "\n" +
    "    .fix-to-top {\r" +
    "\n" +
    "        position: fixed;\r" +
    "\n" +
    "        margin: 0 auto;\r" +
    "\n" +
    "        z-index: 999999999;\r" +
    "\n" +
    "        top: 0;\r" +
    "\n" +
    "        left: 0%;\r" +
    "\n" +
    "        width: 100%;\r" +
    "\n" +
    "        padding: 20px 1%;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .header_inner {\r" +
    "\n" +
    "        margin-bottom: 2%;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .edit_pages_sidebar {\r" +
    "\n" +
    "        margin-left: 3%;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    .edit_pages_content_main {\r" +
    "\n" +
    "        width: 72%;\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "</style>"
  );

}]);
